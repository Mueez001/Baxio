// Single source of truth for copy that must stay consistent across pages.
// Pages and components import from here; nothing below is duplicated elsewhere.

export const contact = {
  email: 'Peet@go2baxio.com',
  legalName: 'Baxio Inc.',
}

export const timeline = {
  reply: 'one business day',
  proposal: 'three business days',
  call: '45-minute scoping call',
  onboarding: 'two weeks',
  pilot: '30-day pilot',
  scaleNotice: 'two weeks',
}

// The three services that are open today. Nothing else is offered on the site.
export const practices = [
  {
    id: 'accounting',
    name: 'Accounting',
    short: 'Payables, receivables, reconciliations, month-end close and management reports, done by experienced accountants.',
    lead: 'Experienced accountants who work in your QuickBooks Online, to your close calendar.',
    covers: [
      'Accounts payable',
      'Accounts receivable',
      'Bank and credit card reconciliations',
      'Month-end close',
      'Management reports',
    ],
    tools: ['QuickBooks Online'],
  },
  {
    id: 'systems',
    name: 'Accounting system set-up',
    short: 'QuickBooks Online set-up and clean-up. Odoo by quote.',
    lead: 'QuickBooks Online set up or cleaned up, so your books are ready to run. Odoo work is quoted per project.',
    covers: [
      'QuickBooks Online set-up',
      'QuickBooks Online clean-up',
    ],
    tools: ['QuickBooks Online'],
    engagement: 'Priced per project. Odoo by quote.',
  },
  {
    id: 'analytics',
    name: 'Data analytics and reporting',
    short: 'Dashboards and recurring reports in Power BI and Excel.',
    lead: 'Dashboards and recurring reports your leadership team will open.',
    covers: [
      'Dashboards',
      'Recurring reports',
    ],
    tools: ['Power BI', 'Excel'],
  },
]

export const cadence = [
  ['Daily', 'Internal stand-up. Blockers escalated the same day.'],
  ['Weekly', 'Written status: throughput, KPIs, exceptions, next week’s plan.'],
  ['Monthly', 'Business review with you.'],
  ['Quarterly', 'Process improvement plan and capacity recommendations.'],
]

// Five stages on How We Work. Home collapses the first two into "Week 0".
export const stages = [
  {
    when: 'Week 0',
    name: 'Discovery',
    body: 'A 45-minute working session with your operator. We map workflows, volumes, tools, edge cases and the reporting you need.',
    receive: ['Documented current-state workflow', 'Volume and complexity baseline', 'Suggested engagement model'],
  },
  {
    when: 'Week 0, day 3',
    name: 'Proposal and scope',
    body: 'Within three business days you receive a written proposal: roles, hours, KPIs, reporting cadence, pricing and a 30-day pilot plan.',
    receive: ['Statement of work', 'Pilot success metrics', 'Pricing range with assumptions'],
  },
  {
    when: 'Weeks 1–2',
    name: 'Onboarding',
    body: 'We document SOPs, provision access through your security model, and run a structured kick-off with your stakeholders.',
    receive: ['SOPs in your knowledge base', 'Access and tooling configured', 'Introductions to your team'],
  },
  {
    when: 'Days 1–30',
    name: '30-day pilot',
    body: 'The team runs live work against the agreed KPIs. We meet weekly, share a written status note and adjust scope before steady state.',
    receive: ['Weekly status report', 'KPI dashboard', 'Pilot review on day 30'],
  },
  {
    when: 'Ongoing',
    name: 'Steady state',
    body: 'Predictable execution with monthly business reviews. Each quarter we propose process improvements and capacity changes, up or down.',
    receive: ['Monthly business review', 'Quarterly improvement plan', 'Single point of escalation'],
  },
]

export const homeProcess = [
  { when: 'Week 0', name: 'Discovery and proposal', body: '45-minute session and a written proposal within three business days.' },
  { when: 'Weeks 1–2', name: 'Onboarding', body: 'SOPs documented, access provisioned, kick-off with your stakeholders.' },
  { when: 'Days 1–30', name: '30-day pilot', body: 'Live work against agreed KPIs, weekly status, pilot review on day 30.' },
  { when: 'Ongoing', name: 'Steady state', body: 'Monthly business review, quarterly improvement plan, scale within two weeks.' },
]

export const principles = [
  ['Process ownership', 'A named person is accountable for your work, and you get a written status every week.'],
  ['Reporting discipline', 'You receive a written status every week and a structured business review every month.'],
  ['Documented SOPs', 'Every workflow we run is documented in your system. If a person leaves, the process does not.'],
  ['KPI accountability', 'Pilots and steady-state engagements are measured against KPIs you sign off on in writing.'],
  ['Security', 'Each person has their own login with multi-factor sign-in, and works on a company laptop.'],
  ['Scale without re-hiring', 'Add or reduce capacity within two weeks. No re-recruiting, no re-onboarding from scratch.'],
]

export const coverage = {
  rows: [
    ['Team', 'Islamabad, Pakistan'],
    ['Hours', 'Your business hours, in your time zone.'],
  ],
}

// No prices on the site. Quotes go in proposals.
export const pricingLine =
  'Monthly work is priced by role, at or below one third of what the same role costs a US employer. Projects are priced per project. Book a call for a quote.'

export const faqItems = [
  {
    q: 'How quickly can we start?',
    a: 'We reply within one business day and send a written proposal within three business days of the scoping call. Onboarding takes two weeks, and the 30-day pilot starts straight after.',
  },
  {
    q: 'Can we scale up or down?',
    a: 'Yes. Adding hours or people, or reducing them, is handled with two weeks’ notice on either side. There are no volume commitments beyond your current scope.',
  },
  {
    q: 'What if performance is not satisfactory?',
    a: 'Every engagement starts with a 30-day pilot tied to written KPIs. If we miss them, we own the fix: we adjust the process or replace the resource within two weeks, and you decide at the pilot review whether to continue.',
  },
  {
    q: 'How do you manage quality?',
    a: 'Each function has documented SOPs and a named person accountable for the output. Quality checks are part of your weekly status, so quality is visible rather than assumed.',
  },
  {
    q: 'What time zones do you support?',
    a: 'Your team works your business hours, in your time zone. We follow your holiday calendar.',
  },
  {
    q: 'Do you provide reporting?',
    a: 'Every engagement includes a weekly written status. Ongoing work adds a monthly business review.',
  },
]

export const values = [
  ['Operator-led', 'Founded by people who ran offshore teams inside a US company, not a recruiting agency that pivoted.'],
  ['Process before people', 'We document the work first. Then the right person is assigned to a clearly defined role, not the other way around.'],
  ['Honest reporting', 'You hear the bad news first. Misses are surfaced with a fix attached.'],
  ['Long engagements', 'We aim for clients who stay for years, not for headcount we can churn through.'],
]

// Listed alphabetically. No ranking is implied by order or title.
export const leadership = [
  {
    name: 'Mueez Ur Rehman',
    title: 'Chief Operating Officer',
    bio: 'Leads FP&A, pricing, reporting and analytics. Turns financial planning into documented processes the delivery teams run.',
  },
  {
    name: 'Peet Van Der Schyff',
    title: 'Chief Executive Officer',
    bio: 'Leads Baxio. Senior finance and logistics-finance leadership; also Chief Financial Officer of MWD.',
  },
  {
    name: 'Shahid Latif Khan',
    title: 'Chairman of the board',
    bio: 'President and CEO of Metropolitan Warehouse & Delivery, a nationwide furniture logistics platform. Brings the discipline of running a US operating business to Baxio.',
  },
  {
    name: 'Zeeshan Ali',
    title: 'Chief Technology Officer',
    bio: 'Technology, client systems, access provisioning and secure connectivity.',
  },
]

export const sopContents = [
  'Purpose and owner',
  'Trigger and inputs',
  'Step-by-step procedure with screenshots',
  'Controls and approvals',
  'Exceptions and escalation path',
  'Service levels',
  'Version history',
  'Review date',
]
