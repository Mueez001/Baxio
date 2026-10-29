import { leadEndpoint } from '../content/site.js'

// Delivers a lead (contact form or chat intake) to the lead inbox by email.
// With VITE_WEB3FORMS_KEY set (GitHub repository variable WEB3FORMS_KEY) it uses Web3Forms, whose
// access key is tied to the inbox it was created for. Without it, it falls back to FormSubmit at
// leadEndpoint. Both keys are public by design: they only allow sending to that one inbox.
const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY || '').trim()

// fields: flat { label: value } pairs for the email table. honey: the spam-trap value, if any.
export async function sendLead({ subject, fields, honey = '', endpoint = leadEndpoint }) {
  const request = WEB3FORMS_KEY
    ? {
        url: 'https://api.web3forms.com/submit',
        body: { access_key: WEB3FORMS_KEY, subject, from_name: 'Baxio website', botcheck: honey, ...fields },
      }
    : {
        url: endpoint,
        body: { _subject: subject, _template: 'table', _honey: honey, ...fields },
      }

  const res = await fetch(request.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(request.body),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res
}
