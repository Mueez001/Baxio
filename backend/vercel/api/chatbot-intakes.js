const ALLOWED_ORIGINS = [
  'https://mueez001.github.io',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]

const DEFAULT_CHATBOT_EMAIL_ENDPOINT = 'https://formsubmit.co/ajax/mueez.rehman@gomwd.com'

function getCorsOrigin(requestOrigin) {
  if (!requestOrigin) {
    return ALLOWED_ORIGINS[0]
  }

  return ALLOWED_ORIGINS.includes(requestOrigin) ? requestOrigin : ALLOWED_ORIGINS[0]
}

function sendJson(res, statusCode, data, requestOrigin) {
  res.status(statusCode)
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Access-Control-Allow-Origin', getCorsOrigin(requestOrigin))
  res.setHeader('Vary', 'Origin')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.send(JSON.stringify(data))
}

function validatePayload(payload) {
  if (!payload || typeof payload !== 'object') {
    return 'Payload must be a JSON object.'
  }

  const requiredStringFields = ['id', 'createdAt', 'source', 'summary']
  for (const field of requiredStringFields) {
    if (typeof payload[field] !== 'string' || payload[field].trim().length === 0) {
      return `Missing or invalid field: ${field}`
    }
  }

  if (!payload.fields || typeof payload.fields !== 'object' || Array.isArray(payload.fields)) {
    return 'Missing or invalid field: fields'
  }

  if (!Array.isArray(payload.transcript)) {
    return 'Missing or invalid field: transcript'
  }

  return null
}

function sanitizeForLog(payload) {
  return {
    id: payload.id,
    createdAt: payload.createdAt,
    source: payload.source,
    company: payload.fields?.company || null,
    workEmail: payload.fields?.workEmail || null,
    fullName: payload.fields?.fullName || null,
    syncStatus: payload.syncStatus || null,
  }
}

function transcriptToText(transcript) {
  const safeTranscript = Array.isArray(transcript) ? transcript : []
  const recent = safeTranscript.slice(-40)

  if (recent.length === 0) {
    return 'No transcript messages provided.'
  }

  return recent
    .map((item) => {
      const role = typeof item?.role === 'string' ? item.role : 'unknown'
      const text = typeof item?.text === 'string' ? item.text : ''
      return `${role}: ${text}`.trim()
    })
    .join('\n')
}

async function forwardIntakeEmail(payload) {
  const endpoint = (process.env.CHATBOT_EMAIL_ENDPOINT || DEFAULT_CHATBOT_EMAIL_ENDPOINT).trim()
  const submittedAt = new Date().toISOString()
  const fields = payload.fields || {}

  const emailPayload = {
    _subject: `Baxio Chatbot Intake - ${fields.company || fields.fullName || payload.id}`,
    _template: 'table',
    _captcha: 'false',
    intakeId: payload.id,
    source: payload.source,
    createdAt: payload.createdAt,
    submittedAt,
    fullName: fields.fullName || 'N/A',
    workEmail: fields.workEmail || 'N/A',
    company: fields.company || 'N/A',
    role: fields.role || 'N/A',
    serviceNeed: fields.service || 'N/A',
    timeline: fields.timeline || 'N/A',
    summary: payload.summary || 'N/A',
    transcript: transcriptToText(payload.transcript),
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(emailPayload),
  })

  if (!response.ok) {
    throw new Error(`Email forward failed with status ${response.status}`)
  }

  return { submittedAt, statusCode: response.status }
}

export default async function handler(req, res) {
  const requestOrigin = req.headers.origin

  if (req.method === 'OPTIONS') {
    return sendJson(res, 200, { ok: true }, requestOrigin)
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, { ok: false, error: 'Method not allowed. Use POST.' }, requestOrigin)
  }

  const payload = req.body
  const validationError = validatePayload(payload)
  if (validationError) {
    return sendJson(res, 400, { ok: false, error: validationError }, requestOrigin)
  }

  const intakeRecord = sanitizeForLog(payload)

  // Minimal live receiver behavior: log intake metadata for observability.
  console.log('[chatbot-intake]', JSON.stringify(intakeRecord))

  try {
    const emailResult = await forwardIntakeEmail(payload)

    return sendJson(
      res,
      200,
      {
        ok: true,
        id: payload.id,
        receivedAt: new Date().toISOString(),
        emailForwardedAt: emailResult.submittedAt,
        message: 'Intake received and emailed',
      },
      requestOrigin,
    )
  } catch (error) {
    console.error('[chatbot-intake-email-error]', error)

    return sendJson(
      res,
      502,
      {
        ok: false,
        id: payload.id,
        error: error instanceof Error ? error.message : 'Email forward failed',
      },
      requestOrigin,
    )
  }
}
