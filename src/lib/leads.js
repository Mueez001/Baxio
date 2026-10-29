import { leadEndpoint } from '../content/site.js'

// Delivers a lead (contact form or chat intake) to the lead inbox. Tries, in order:
//   1. Google Apps Script web app (VITE_LEADS_SCRIPT_URL, GitHub repository variable LEADS_SCRIPT_URL):
//      saves the lead to a Google Sheet, then emails it. Source: backend/google-apps-script/.
//   2. Web3Forms (VITE_WEB3FORMS_KEY, repository variable WEB3FORMS_KEY): email only.
//   3. FormSubmit at leadEndpoint: email only, needs a one-time activation per address.
// The first one that answers OK wins. The URL and key are public by design: they only deliver to our inbox.
const SCRIPT_URL = (import.meta.env.VITE_LEADS_SCRIPT_URL || '').trim()
const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY || '').trim()
const TIMEOUT_MS = 15000

async function post(url, body, contentType = 'application/json') {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, {
      method: 'POST',
      // Apps Script cannot answer a CORS preflight, so it gets text/plain (a "simple" request).
      headers: { 'Content-Type': contentType, Accept: 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res
  } finally {
    clearTimeout(timer)
  }
}

// fields: flat { label: value } pairs for the email table. honey: the spam-trap value, if any.
export async function sendLead({ subject, fields, honey = '', endpoint = leadEndpoint }) {
  const attempts = []
  if (SCRIPT_URL) {
    attempts.push(async () => {
      const res = await post(SCRIPT_URL, { subject, fields, honey }, 'text/plain;charset=utf-8')
      const result = await res.clone().json()
      if (!result.ok) throw new Error(result.error || 'Lead script refused the lead')
      return res
    })
  }
  if (WEB3FORMS_KEY) {
    attempts.push(() =>
      post('https://api.web3forms.com/submit', {
        access_key: WEB3FORMS_KEY,
        subject,
        from_name: 'Baxio website',
        botcheck: honey,
        ...fields,
      }),
    )
  }
  if (endpoint) {
    attempts.push(() => post(endpoint, { _subject: subject, _template: 'table', _honey: honey, ...fields }))
  }

  let lastError = new Error('No lead endpoint configured')
  for (const attempt of attempts) {
    try {
      return await attempt()
    } catch (err) {
      lastError = err
    }
  }
  throw lastError
}
