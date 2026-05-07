const ALLOWED_ORIGINS = [
  'https://mueez001.github.io',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]

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
  // For persistence, connect a DB or third-party API here.
  console.log('[chatbot-intake]', JSON.stringify(intakeRecord))

  return sendJson(
    res,
    200,
    {
      ok: true,
      id: payload.id,
      receivedAt: new Date().toISOString(),
      message: 'Intake received',
    },
    requestOrigin,
  )
}
