import { useEffect, useMemo, useRef, useState } from 'react'

const discoveryQuestions = [
  { key: 'fullName', label: 'Full name', prompt: 'What is your full name?', required: true },
  { key: 'workEmail', label: 'Work email', prompt: 'What is your work email?', required: true, kind: 'email' },
  { key: 'company', label: 'Company', prompt: 'What is your company name?', required: true },
  { key: 'role', label: 'Role', prompt: 'What is your role/title?', required: false },
  { key: 'service', label: 'Service need', prompt: 'Which service are you interested in? (finance, support, ops, analytics)', required: true },
  { key: 'teamSize', label: 'Current team size', prompt: 'How many people are currently handling this workload?', required: false },
  { key: 'volume', label: 'Monthly volume', prompt: 'What monthly volume should we expect? (tickets, invoices, orders, etc.)', required: false },
  { key: 'tools', label: 'Tools', prompt: 'Which tools/systems are in your current workflow?', required: false },
  { key: 'timeline', label: 'Timeline', prompt: 'When do you want to go live?', required: true },
  { key: 'budget', label: 'Budget range', prompt: 'Do you have a monthly budget range in mind?', required: false },
  { key: 'painPoints', label: 'Pain points', prompt: 'What are the top pain points you want fixed first?', required: true },
  { key: 'successMetric', label: 'Success metric', prompt: 'What result would make this engagement a clear win in 90 days?', required: true },
]

const botKnowledge = [
  {
    keywords: ['services', 'service', 'offer', 'what do you do'],
    answer:
      'We support Finance and Accounting, Customer Support, Operations Support, and Data and Analytics for US businesses.',
  },
  {
    keywords: ['pricing', 'cost', 'price', 'budget'],
    answer:
      'Pricing depends on role mix, coverage hours, and reporting scope. If you want, I can collect your requirements and email a discovery summary privately to our team.',
  },
  {
    keywords: ['timeline', 'onboarding', 'start', 'go live'],
    answer:
      'Typical onboarding starts with discovery, then pilot design, then implementation. Many teams are operational within a few weeks.',
  },
  {
    keywords: ['location', 'timezone', 'hours', 'coverage'],
    answer:
      'Baxio supports US time-zone coverage with structured reporting cadence and managed delivery.',
  },
  {
    keywords: ['contact', 'consultation', 'book'],
    answer:
      'You can use the Contact page for a consultation, or I can gather your scope right now and send it privately to our team.',
  },
]

const DEFAULT_WEBHOOK_URL = 'https://vercel-lake-kappa-40.vercel.app/api/chatbot-intakes'

function makeId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(() => [
    {
      id: makeId(),
      role: 'bot',
      text:
        'Hi, I am the Baxio assistant. I can answer basic questions and collect your project details for a private discovery summary sent to our team.',
    },
  ])
  const [stepIndex, setStepIndex] = useState(-1)
  const [draft, setDraft] = useState({})
  const listRef = useRef(null)

  useEffect(() => {
    if (!listRef.current) {
      return
    }
    listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages, isOpen])

  const inDiscovery = stepIndex >= 0
  const endpoint = (import.meta.env.VITE_CHATBOT_WEBHOOK_URL || DEFAULT_WEBHOOK_URL).trim()

  const helperLabel = useMemo(() => {
    if (!inDiscovery) {
      return 'Ask a question or type: start'
    }

    const q = discoveryQuestions[stepIndex]
    return q?.required ? 'This question is required' : 'Type skip to leave this blank'
  }, [inDiscovery, stepIndex])

  function pushBot(text) {
    setMessages((prev) => [...prev, { id: makeId(), role: 'bot', text }])
  }

  function startDiscovery() {
    setDraft({})
    setStepIndex(0)
    pushBot('Perfect. I will ask a few focused questions and send the result privately to our team.')
    pushBot(discoveryQuestions[0].prompt)
  }

  async function syncToBackend(payload) {
    if (!endpoint) {
      return { status: 'local-only' }
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      let responseBody = null
      try {
        responseBody = await response.json()
      } catch {
        responseBody = null
      }

      return {
        status: 'synced',
        responseCode: response.status,
        remoteId: responseBody?.id || responseBody?.submissionId || null,
      }
    } catch (error) {
      return {
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown sync error',
      }
    }
  }

  async function finalizeDiscovery(finalDraft, transcript) {
    const createdAt = new Date().toISOString()
    const summaryLines = discoveryQuestions.map((q) => `- ${q.label}: ${finalDraft[q.key] || 'Not provided'}`)
    const summary = ['# Discovery Intake', '', ...summaryLines].join('\n')

    const compiledEntry = {
      id: makeId(),
      createdAt,
      source: 'chatbot',
      fields: finalDraft,
      summary,
      transcript,
      syncStatus: endpoint ? 'pending' : 'failed',
    }

    const syncResult = await syncToBackend(compiledEntry)

    if (syncResult.status === 'synced') {
      pushBot('Done. I sent your discovery summary and transcript privately to our team.')
    } else if (syncResult.status === 'failed') {
      pushBot('I could not send your discovery summary right now. Please use the Contact page or try again shortly.')
    } else {
      pushBot('Done. I sent your discovery summary privately to our team.')
    }

    setStepIndex(-1)
    setDraft({})
  }

  function answerBasicQuestion(text) {
    const lowered = text.toLowerCase()

    if (['start', 'quote', 'proposal', 'scope', 'discovery'].some((w) => lowered.includes(w))) {
      startDiscovery()
      return
    }

    const hit = botKnowledge.find((item) => item.keywords.some((k) => lowered.includes(k)))
    if (hit) {
      pushBot(hit.answer)
      if (hit.keywords.includes('pricing')) {
        pushBot('Type start when you want me to gather your scope.')
      }
      return
    }

    pushBot('I can help with services, pricing, onboarding, timeline, and contact details. I can also gather your full project intake. Type start to begin.')
  }

  function handleSend(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text) {
      return
    }

    setMessages((prev) => [...prev, { id: makeId(), role: 'user', text }])
    setInput('')

    if (inDiscovery) {
      const current = discoveryQuestions[stepIndex]
      const normalized = text.toLowerCase()

      if (normalized === 'cancel') {
        pushBot('Discovery canceled. Type start whenever you want to restart.')
        setStepIndex(-1)
        setDraft({})
        return
      }

      if (normalized === 'skip' && !current.required) {
        const nextIndex = stepIndex + 1
        if (nextIndex >= discoveryQuestions.length) {
          const transcript = [...messages, { id: makeId(), role: 'user', text }]
          void finalizeDiscovery({ ...draft, [current.key]: '' }, transcript)
          return
        }
        setDraft((prev) => ({ ...prev, [current.key]: '' }))
        setStepIndex(nextIndex)
        pushBot(discoveryQuestions[nextIndex].prompt)
        return
      }

      if (!text && current.required) {
        pushBot('That answer is required. Please provide it.')
        return
      }

      if (current.kind === 'email' && !isValidEmail(text)) {
        pushBot('Please provide a valid work email address.')
        return
      }

      const nextDraft = { ...draft, [current.key]: text }
      const nextIndex = stepIndex + 1

      if (nextIndex >= discoveryQuestions.length) {
        const transcript = [...messages, { id: makeId(), role: 'user', text }]
        void finalizeDiscovery(nextDraft, transcript)
        return
      }

      setDraft(nextDraft)
    pushBot('I can help with services, pricing, onboarding, timeline, and contact details. I can also gather your full project intake and send it privately to our team. Type start to begin.')
      pushBot(discoveryQuestions[nextIndex].prompt)
      return
    }

    answerBasicQuestion(text)
  }

  return (
    <>
      {isOpen && (
        <section className="fixed bottom-24 right-4 z-50 w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-2xl sm:right-6">
          <header className="flex items-center justify-between border-b border-ink-100 bg-ink-950 px-4 py-3 text-white">
            <div>
              <p className="font-display text-sm font-semibold">Baxio Assistant</p>
              <p className="text-xs text-ink-200">Basic Q&A + discovery intake</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid h-8 w-8 place-items-center rounded-md bg-white/10 text-white hover:bg-white/20"
              aria-label="Close chatbot"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </header>

          <div ref={listRef} className="max-h-[380px] space-y-3 overflow-y-auto bg-ink-50/60 px-4 py-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <p
                  className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'rounded-br-md bg-brand-600 text-white'
                      : 'rounded-bl-md border border-ink-100 bg-white text-ink-700'
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-ink-100 bg-white px-4 py-3">
            <form onSubmit={handleSend} className="space-y-2">
              <p className="text-xs text-ink-400">{helperLabel}</p>
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message"
                  className="h-10 w-full rounded-lg border border-ink-200 px-3 text-sm text-ink-800 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
                />
                <button type="submit" className="btn-accent h-10 px-4 py-0 text-xs">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-ink-800 sm:right-6"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        {isOpen ? 'Close assistant' : 'Chat with us'}
      </button>
    </>
  )
}
