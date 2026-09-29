import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import { contact, practices, timeline, ctaLabel } from '../content/site'

const ENDPOINT =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://formsubmit.co/ajax/Peet@go2baxio.com'

const NOT_SURE = 'Not sure yet'
const SOMETHING_ELSE = 'Something else'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const ERRORS = {
  name: 'Enter your full name.',
  email: 'Enter a work email address.',
  scope: 'Tell us about your scope.',
}

const NEXT_STEPS = [
  ['Within ' + timeline.reply, 'We reply to arrange a ' + timeline.call + '.'],
  ['On the call', 'We map workflows, volume, tools and reporting needs.'],
  ['Within ' + timeline.proposal, 'You receive the written proposal.'],
]

const LEAD =
  'Tell us about your scope. We respond within ' +
  timeline.reply +
  ' and send a written proposal within ' +
  timeline.proposal +
  '.'

// Accepts a service id ("accounting") or a service name, case-insensitively.
function serviceFromParam(value) {
  if (!value) return NOT_SURE
  const key = value.trim().toLowerCase()
  const match = practices.find((p) => p.id === key || p.name.toLowerCase() === key)
  return match ? match.name : NOT_SURE
}

function nextBusinessDay(from = new Date()) {
  const d = new Date(from)
  d.setDate(d.getDate() + 1)
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1)
  return d.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = ERRORS.name
  if (!EMAIL_RE.test(values.email.trim())) errors.email = ERRORS.email
  if (!values.scope.trim()) errors.scope = ERRORS.scope
  return errors
}

export default function Contact() {
  usePageMeta({
    title: 'Contact | Baxio',
    description:
      ctaLabel + '. We respond within ' +
      timeline.reply +
      ' and send a written proposal within ' +
      timeline.proposal +
      '.',
  })

  const [searchParams] = useSearchParams()
  const serviceParam = searchParams.get('service')
  const intent = searchParams.get('intent')
  const isProposal = intent === 'proposal'

  const [values, setValues] = useState(() => ({
    name: '',
    email: '',
    company: '',
    role: '',
    service: serviceFromParam(serviceParam),
    scope: '',
    _honey: '',
  }))
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [failed, setFailed] = useState(false)
  const [done, setDone] = useState(null)

  const refs = {
    name: useRef(null),
    email: useRef(null),
    scope: useRef(null),
  }
  const successRef = useRef(null)

  useEffect(() => {
    if (done && successRef.current) successRef.current.focus()
  }, [done])

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))

  const onBlur = (key) => () => {
    const next = validate(values)
    setErrors((prev) => {
      const copy = { ...prev }
      if (next[key]) copy[key] = next[key]
      else delete copy[key]
      return copy
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    const first = ['name', 'email', 'scope'].find((k) => next[k])
    if (first) {
      refs[first].current?.focus()
      return
    }

    setSending(true)
    setFailed(false)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          role: values.role.trim(),
          service: values.service,
          scope: values.scope.trim(),
          intent: isProposal ? 'proposal' : 'consultation',
          _subject: 'Baxio consultation request: ' + values.name.trim(),
          _template: 'table',
          _honey: values._honey,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setDone({ email: values.email.trim(), day: nextBusinessDay() })
    } catch {
      setFailed(true)
    } finally {
      setSending(false)
    }
  }

  const describedBy = (key) => (errors[key] ? key + '-error' : undefined)

  return (
    <>
      <section className="section-hero ground-paper pb-0 lg:pb-0" aria-labelledby="contact-title">
        <div className="container-page">
          <h1 className="display-l" id="contact-title">
            {ctaLabel}.
          </h1>
          <p className="lead container-prose mt-6">{LEAD}</p>
        </div>
      </section>

      <section className="ground-paper section" aria-label="Contact form and details">
        <div className="container-page grid-12 gap-y-16">
          <div className="col-span-4 md:col-span-7">
            {done ? (
              <div className="rows" role="status">
                <h2 className="h2 pt-2 pb-6" tabIndex={-1} ref={successRef}>
                  Request received.
                </h2>
                <p className="row-sm block body mt-0">
                  You will hear from us by {done.day} at {done.email}.
                </p>
                <p className="row-sm block body mt-0">
                  Within {timeline.proposal} you receive a written proposal: roles, hours, KPIs,
                  cadence and pricing.
                </p>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="flex flex-col gap-6">
                {/* Honeypot: hidden from people, filled by bots. FormSubmit drops any submission where _honey is set. */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="_honey">Leave this field empty</label>
                  <input
                    id="_honey"
                    name="_honey"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values._honey}
                    onChange={set('_honey')}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="field-label" htmlFor="name">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="field"
                      autoComplete="name"
                      required
                      ref={refs.name}
                      value={values.name}
                      onChange={set('name')}
                      onBlur={onBlur('name')}
                      aria-invalid={errors.name ? 'true' : undefined}
                      aria-describedby={describedBy('name')}
                    />
                    {errors.name && (
                      <p className="field-error" id="name-error">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="field-label" htmlFor="email">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="field"
                      autoComplete="email"
                      required
                      ref={refs.email}
                      value={values.email}
                      onChange={set('email')}
                      onBlur={onBlur('email')}
                      aria-invalid={errors.email ? 'true' : undefined}
                      aria-describedby={describedBy('email')}
                    />
                    {errors.email && (
                      <p className="field-error" id="email-error">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="field-label" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="field"
                      autoComplete="organization"
                      value={values.company}
                      onChange={set('company')}
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="role">
                      Role
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      className="field"
                      autoComplete="organization-title"
                      value={values.role}
                      onChange={set('role')}
                    />
                  </div>
                </div>

                <div>
                  <label className="field-label" htmlFor="service">
                    What do you need help with?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="field appearance-none pr-10"
                    value={values.service}
                    onChange={set('service')}
                  >
                    {practices.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value={SOMETHING_ELSE}>{SOMETHING_ELSE}</option>
                    <option value={NOT_SURE}>{NOT_SURE}</option>
                  </select>
                </div>

                <div>
                  <label className="field-label" htmlFor="scope">
                    Tell us about your scope
                  </label>
                  <textarea
                    id="scope"
                    name="scope"
                    className="field-area"
                    required
                    ref={refs.scope}
                    value={values.scope}
                    onChange={set('scope')}
                    onBlur={onBlur('scope')}
                    placeholder={
                      isProposal
                        ? 'Tell us the workflows, volumes and KPIs you want in the proposal.'
                        : 'Which workflows are you considering, and at what volume, with which tools?'
                    }
                    aria-invalid={errors.scope ? 'true' : undefined}
                    aria-describedby={describedBy('scope')}
                  />
                  {errors.scope && (
                    <p className="field-error" id="scope-error">
                      {errors.scope}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="caption">
                    We use your details only to reply to you. See our{' '}
                    <Link to="/privacy" className="underline hover:opacity-70">
                      privacy policy
                    </Link>
                    .
                  </p>
                  <button type="submit" className="btn-crimson" disabled={sending}>
                    {sending ? 'Sending…' : 'Send request'}
                  </button>
                </div>

                {failed && (
                  <p className="field-error" role="alert">
                    We could not send your request. Email {contact.email} or call {contact.phone}.
                  </p>
                )}
              </form>
            )}
          </div>

          <div className="col-span-4 md:col-span-4 md:col-start-9">
            <h2 className="meta">What happens next</h2>
            <ol className="rows mt-3 list-none">
              {NEXT_STEPS.map(([when, text]) => (
                <li key={when} className="row-sm block">
                  <p className="meta">{when}</p>
                  <p className="body-sm mt-1">{text}</p>
                </li>
              ))}
            </ol>

            <h2 className="meta mt-12">Direct contact</h2>
            <dl className="rows mt-3">
              <div className="row-sm block">
                <dt className="meta">Email</dt>
                <dd className="body-sm mt-1">
                  <a className="text-ink hover:opacity-70 transition-opacity duration-150" href={'mailto:' + contact.email}>
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="row-sm block">
                <dt className="meta">Phone</dt>
                <dd className="body-sm mt-1">
                  <a className="text-ink hover:opacity-70 transition-opacity duration-150" href={contact.phoneHref}>
                    {contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
