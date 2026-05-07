import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Contact() {
  const [params] = useSearchParams()
  const intent = params.get('intent') === 'proposal' ? 'Request a proposal' : 'Book a consultation'
  const tier = params.get('tier')

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: tier === 'starter' ? 'Starter Support'
      : tier === 'managed' ? 'Managed Team'
      : tier === 'dedicated' ? 'Dedicated Resource'
      : 'Dedicated Resource',
    message: '',
  })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // Replace with real endpoint integration
    setSubmitted(true)
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-100">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="container-x relative pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-5 h-display">{intent}.</h1>
            <p className="mt-6 lead">
              Tell us about your scope. We respond within one business day with a written proposal — roles, hours, reporting cadence, and pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="card p-8 sm:p-10">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="grid h-14 w-14 mx-auto place-items-center rounded-full bg-accent-500/10 text-accent-600">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold">Got it. We’ll be in touch within 1 business day.</h2>
                  <p className="mt-3 text-ink-500 max-w-md mx-auto">
                    A member of our account team will follow up to schedule a 45-minute scoping call.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full name" required>
                    <input required value={form.name} onChange={update('name')} className="input" placeholder="Jane Doe" />
                  </Field>
                  <Field label="Work email" required>
                    <input required type="email" value={form.email} onChange={update('email')} className="input" placeholder="jane@company.com" />
                  </Field>
                  <Field label="Company">
                    <input value={form.company} onChange={update('company')} className="input" placeholder="Company Inc." />
                  </Field>
                  <Field label="Role">
                    <input value={form.role} onChange={update('role')} className="input" placeholder="COO, Controller, Head of Ops…" />
                  </Field>
                  <Field label="Engagement interest" full>
                    <select value={form.interest} onChange={update('interest')} className="input">
                      <option>Starter Support</option>
                      <option>Dedicated Resource</option>
                      <option>Managed Team</option>
                      <option>Not sure yet</option>
                    </select>
                  </Field>
                  <Field label="Tell us about your scope" full required>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      className="input resize-none"
                      placeholder="What workflows are you considering offshoring? Volume, tools, timeline."
                    />
                  </Field>

                  <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
                    <p className="text-xs text-ink-400">
                      We’ll never share your details. By submitting you agree to our privacy policy.
                    </p>
                    <button type="submit" className="btn-accent">
                      Send message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-5">
            <div className="card p-7">
              <h3 className="font-display text-lg font-semibold">What happens next</h3>
              <ol className="mt-5 space-y-4">
                {[
                  ['1', 'Reply within 1 business day', 'An account owner reaches out to schedule a 45-minute scoping call.'],
                  ['2', 'Working session', 'We map your workflows, volume, tools, and reporting needs.'],
                  ['3', 'Written proposal', 'Within 3 business days: roles, hours, KPIs, cadence, and pricing.'],
                ].map(([n, t, d]) => (
                  <li key={n} className="flex gap-4">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink-900 text-white text-xs font-bold">{n}</div>
                    <div>
                      <div className="font-semibold text-ink-900">{t}</div>
                      <div className="text-sm text-ink-500">{d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="card p-7">
              <h3 className="font-display text-lg font-semibold">Direct contact</h3>
              <ul className="mt-5 space-y-3 text-sm text-ink-700">
                <li><span className="text-ink-400">Email:</span> hello@baxio.co</li>
                <li><span className="text-ink-400">Phone:</span> +1 (302) 555-0148</li>
                <li><span className="text-ink-400">Hours:</span> Mon–Fri · 8am–8pm ET</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid #D0D5DD;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 14px;
          color: #101828;
          background: #fff;
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input::placeholder { color: #98A2B3; }
        .input:focus { border-color: #3B62E0; box-shadow: 0 0 0 4px rgba(59,98,224,.12); }
      `}</style>
    </>
  )
}

function Field({ label, children, full, required }) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="text-sm font-semibold text-ink-700">
        {label}{required && <span className="text-brand-600"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}
