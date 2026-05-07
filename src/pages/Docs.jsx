import { useMemo, useState } from 'react'
import { useChatbot } from '../context/ChatbotContext.jsx'

function toPrettyDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return 'Unknown date'
  }
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}

export default function Docs() {
  const { entries, clearEntries } = useChatbot()
  const [copiedId, setCopiedId] = useState(null)

  const totalIntakes = entries.length
  const latest = useMemo(() => (entries[0] ? toPrettyDate(entries[0].createdAt) : 'No entries yet'), [entries])

  async function copySummary(id, summary) {
    try {
      await navigator.clipboard.writeText(summary)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 1200)
    } catch {
      setCopiedId(null)
    }
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-100">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="container-x relative pb-14 pt-20 sm:pb-16 sm:pt-28">
          <span className="eyebrow">Docs</span>
          <h1 className="mt-5 h-display">Compiled Chatbot Intakes.</h1>
          <p className="mt-5 max-w-3xl lead">
            Every chatbot discovery is compiled here so your team can review business context, constraints, timeline, and success criteria in one place.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <StatCard label="Total intakes" value={String(totalIntakes)} />
            <StatCard label="Source" value="Website assistant" />
            <StatCard label="Latest update" value={latest} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <h2 className="h-section">Discovery Entries</h2>
            {entries.length > 0 && (
              <button
                type="button"
                onClick={clearEntries}
                className="rounded-lg border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-50"
              >
                Clear all entries
              </button>
            )}
          </div>

          {entries.length === 0 ? (
            <div className="card p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold text-ink-900">No compiled docs yet.</h3>
              <p className="mt-3 max-w-2xl text-ink-500">
                Use the chatbot in the bottom-right corner, answer the discovery questions, and each completed intake will appear here automatically.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {entries.map((entry, i) => (
                <article key={entry.id} className="card overflow-hidden">
                  <header className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-100 bg-ink-50 px-5 py-4 sm:px-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Entry {totalIntakes - i}</p>
                      <p className="font-display text-lg font-semibold text-ink-900">{entry.fields?.company || 'Unknown company'}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-ink-500">{toPrettyDate(entry.createdAt)}</div>
                      <div className={`mt-1 inline-flex rounded-full px-2 py-1 text-[11px] font-semibold ${statusClassName(entry.syncStatus)}`}>
                        {statusLabel(entry.syncStatus)}
                      </div>
                    </div>
                  </header>

                  <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Captured details</h3>
                      <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                        {Object.entries(entry.fields || {}).map(([key, value]) => (
                          <div key={key} className="rounded-lg border border-ink-100 bg-white p-3">
                            <dt className="text-xs font-semibold uppercase tracking-wider text-ink-400">{formatKey(key)}</dt>
                            <dd className="mt-1 text-sm text-ink-700">{value || 'Not provided'}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="rounded-xl border border-ink-100 bg-ink-950 p-4 text-ink-100">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-ink-300">Compiled markdown</p>
                          <button
                            type="button"
                            onClick={() => copySummary(entry.id, entry.summary)}
                            className="rounded-md border border-white/20 px-2.5 py-1 text-xs font-semibold text-white hover:bg-white/10"
                          >
                            {copiedId === entry.id ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                        {entry.syncStatus === 'failed' && (
                          <p className="mb-3 rounded-md border border-red-400/40 bg-red-500/10 px-2.5 py-2 text-xs text-red-200">
                            Backend sync failed: {entry.syncError || 'Unknown error'}
                          </p>
                        )}
                        <pre className="max-h-[330px] overflow-auto whitespace-pre-wrap text-xs leading-relaxed">{entry.summary}</pre>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="card p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold text-ink-900">{value}</p>
    </div>
  )
}

function formatKey(value) {
  return value
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (m) => m.toUpperCase())
}

function statusLabel(status) {
  if (status === 'synced') return 'Backend synced'
  if (status === 'pending') return 'Syncing'
  if (status === 'failed') return 'Sync failed'
  return 'Local only'
}

function statusClassName(status) {
  if (status === 'synced') return 'bg-accent-500/15 text-accent-600'
  if (status === 'pending') return 'bg-brand-500/15 text-brand-700'
  if (status === 'failed') return 'bg-red-500/15 text-red-700'
  return 'bg-ink-200 text-ink-700'
}
