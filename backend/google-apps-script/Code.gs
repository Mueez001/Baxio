// Baxio website lead inbox: Google Apps Script web app bound to a Google Sheet.
// The website (src/lib/leads.js) POSTs every contact-form and chat-assistant lead here.
// Each lead is saved as a row in the "Leads" tab first, then emailed to LEAD_EMAIL, so a lead
// is kept even if the email fails. Setup steps: SETUP.md in this folder.

const LEAD_EMAIL = 'mueez@go2baxio.com'
const SHEET_NAME = 'Leads'
const FIXED_COLUMNS = ['received_at', 'subject', 'emailed']
const MAX_VALUE_LENGTH = 20000

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.waitLock(20000)
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}')
    // Honeypot: hidden field only bots fill in. Answer "ok" so they move on, but keep nothing.
    if (data.honey) return json({ ok: true })

    const subject = clean(data.subject || 'Baxio website lead').slice(0, 200)
    const fields = data.fields && typeof data.fields === 'object' ? data.fields : {}
    const keys = Object.keys(fields).slice(0, 40)

    const sheet = leadsSheet()
    const headers = ensureColumns(sheet, keys)
    const values = { received_at: new Date(), subject: subject, emailed: 'pending' }
    keys.forEach(function (k) {
      values[k] = clean(fields[k])
    })
    sheet.appendRow(headers.map(function (h) {
      return h in values ? safeCell(values[h]) : ''
    }))
    const row = sheet.getLastRow()
    const emailedCol = headers.indexOf('emailed') + 1

    let emailed = true
    try {
      sendLeadEmail(subject, keys, values)
      sheet.getRange(row, emailedCol).setValue('yes')
    } catch (err) {
      emailed = false
      sheet.getRange(row, emailedCol).setValue('failed: ' + String(err).slice(0, 200))
    }
    // Saved in the Sheet counts as delivered, even if the email failed.
    return json({ ok: true, saved: true, emailed: emailed })
  } catch (err) {
    return json({ ok: false, error: String(err) })
  } finally {
    lock.releaseLock()
  }
}

// Health check: open the web app URL in a browser and it should say ok.
function doGet() {
  return json({ ok: true, service: 'baxio-leads' })
}

// Run this once from the editor: it asks for permission and sends a test lead.
function testLead() {
  const result = doPost({
    postData: {
      contents: JSON.stringify({
        subject: 'Baxio test lead (from the script editor)',
        fields: { name: 'Test Lead', email: LEAD_EMAIL, company: 'Baxio', scope: 'Setup test, safe to delete.' },
      }),
    },
  })
  Logger.log(result.getContent())
}

function sendLeadEmail(subject, keys, values) {
  const rows = keys
    .map(function (k) {
      return '<tr><th align="left" valign="top" style="padding:6px 12px 6px 0;color:#555">' + escapeHtml(k) +
        '</th><td style="padding:6px 0;white-space:pre-wrap">' + escapeHtml(values[k]) + '</td></tr>'
    })
    .join('')
  const sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl()
  const options = {
    to: LEAD_EMAIL,
    subject: subject,
    name: 'Baxio website',
    htmlBody: '<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">' + rows +
      '</table><p style="font-family:Arial,sans-serif;font-size:12px;color:#777">Saved in the leads sheet: ' +
      '<a href="' + sheetUrl + '">' + sheetUrl + '</a></p>',
  }
  // Reply goes straight to the lead when they gave a valid address.
  const replyTo = values.email || ''
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo)) options.replyTo = replyTo
  MailApp.sendEmail(options)
}

function leadsSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet()
  return book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME)
}

// Header row grows as new field names arrive (contact form and chat send different fields).
function ensureColumns(sheet, keys) {
  const width = sheet.getLastColumn()
  let headers = width ? sheet.getRange(1, 1, 1, width).getValues()[0].map(String) : []
  const wanted = FIXED_COLUMNS.concat(keys)
  const missing = wanted.filter(function (k) {
    return headers.indexOf(k) === -1
  })
  if (missing.length) {
    sheet.getRange(1, headers.length + 1, 1, missing.length).setValues([missing])
    headers = headers.concat(missing)
    sheet.setFrozenRows(1)
  }
  return headers
}

function clean(value) {
  return String(value == null ? '' : value).slice(0, MAX_VALUE_LENGTH)
}

// Stop a lead's text from being read as a spreadsheet formula.
function safeCell(value) {
  return typeof value === 'string' && /^[=+\-@]/.test(value) ? "'" + value : value
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
  })
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
