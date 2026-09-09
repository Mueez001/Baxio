// Single source of truth for copy that must stay consistent across pages.
// Pages and components import from here; nothing below is duplicated elsewhere.

export const contact = {
  email: 'peet@go2baxio.com',
  phone: '+1 800 300 7417',
  phoneHref: 'tel:+18003007417',
  hours: 'Monday to Friday, 8am to 8pm ET',
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

export const practices = [
  {
    id: 'finance',
    name: 'Finance & Accounting',
    short: 'AR and AP, reconciliations, month-end close and reporting packs, run by US-GAAP-trained staff.',
    lead: 'Senior bookkeepers and AR/AP specialists trained on US-GAAP basics, built around your close calendar, not ours.',
    covers: [
      'Accounts receivable and collections',
      'Accounts payable and vendor reconciliation',
      'Bank and credit card reconciliations',
      'Month-end close support',
      'Management reporting packs',
      'Audit and tax preparation support',
    ],
    tools: ['QuickBooks', 'Xero', 'Zoho Books', 'Odoo'],
  },
  {
    id: 'support',
    name: 'Customer Support',
    short: 'Email, chat and voice with QA scoring, SLAs and CSAT reporting built in.',
    lead: 'Email, chat and voice teams that work to your tone of voice and SLAs, with weekly QA scoring built in.',
    covers: [
      'Tier 1 and Tier 2 support',
      'Order, returns and account inquiries',
      'CSAT and CES reporting',
      'Knowledge-base and macro management',
      'Weekly QA scoring',
      'After-hours and weekend coverage on request',
    ],
    tools: ['Zendesk', 'Intercom', 'Freshdesk', 'HubSpot'],
  },
  {
    id: 'operations',
    name: 'Operations Support',
    short: 'Order processing, vendor and PO management, SOP documentation.',
    lead: 'The repeatable back-office work that decides whether your business runs cleanly each week.',
    covers: [
      'Order processing and fulfilment operations',
      'Vendor onboarding and PO management',
      'Inventory and SKU maintenance',
      'CRM hygiene and lead enrichment',
      'Document processing and data entry',
      'Workflow documentation (SOPs)',
    ],
    tools: ['NetSuite', 'ShipStation', 'HubSpot', 'Salesforce', 'Notion'],
  },
  {
    id: 'analytics',
    name: 'Data & Analytics',
    short: 'KPI dashboards in Looker, Power BI and Sheets, with analyst support.',
    lead: 'Analysts who take messy operational data and return clean dashboards your leadership team will open.',
    covers: [
      'KPI dashboards',
      'Recurring reporting automation',
      'Data cleanup and enrichment',
      'Cohort, funnel and retention analysis',
      'Ad-hoc analyst capacity',
      'SQL, Python and Excel modelling',
    ],
    tools: ['Looker', 'Power BI', 'Google Sheets', 'BigQuery', 'Excel'],
  },
  {
    id: 'erp',
    name: 'ERP Implementation',
    short: 'Requirements, configuration, data migration, testing and go-live, run as a scoped project with a named lead.',
    lead: 'Whatever accounting or ERP system you run, or plan to move to, the implementation is taken care of end to end and documented so your own team can run it afterwards.',
    covers: [
      'Requirements and process mapping',
      'System configuration and workflow setup',
      'Data cleansing and migration',
      'Integrations with your existing systems',
      'User acceptance testing and training',
      'Go-live support and hypercare',
    ],
    engagement: 'Scoped and priced as a project, separately from the monthly plans.',
  },
]

export const cadence = [
  ['Daily', 'Internal stand-up. Blockers escalated the same day.'],
  ['Weekly', 'Written status: throughput, KPIs, exceptions, next week’s plan.'],
  ['Monthly', 'Business review with your team lead and account owner.'],
  ['Quarterly', 'Process optimisation plan and capacity recommendations.'],
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
    body: 'We document SOPs, provision access through your security model, and your team lead runs a structured kick-off with your stakeholders.',
    receive: ['SOPs in your knowledge base', 'Access and tooling configured', 'Team lead introductions'],
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
    receive: ['Monthly business review', 'Quarterly optimisation plan', 'Single point of escalation'],
  },
]

export const homeProcess = [
  { when: 'Week 0', name: 'Discovery and proposal', body: '45-minute session and a written proposal within three business days.' },
  { when: 'Weeks 1–2', name: 'Onboarding', body: 'SOPs documented, access provisioned, kick-off with your stakeholders.' },
  { when: 'Days 1–30', name: '30-day pilot', body: 'Live work against agreed KPIs, weekly status, pilot review on day 30.' },
  { when: 'Ongoing', name: 'Steady state', body: 'Monthly business review, quarterly optimisation plan, scale within two weeks.' },
]

export const principles = [
  ['Process ownership', 'A named team lead is accountable for the work end to end, not a pool of anonymous agents.'],
  ['Reporting discipline', 'You receive a written status every week and a structured business review every month.'],
  ['Documented SOPs', 'Every workflow we run is documented in your system. If a person leaves, the process does not.'],
  ['KPI accountability', 'Pilots and steady-state engagements are measured against KPIs you sign off on in writing.'],
  ['Security by design', 'Role-based access, MFA, device controls and signed NDAs across every engagement.'],
  ['Scale without re-hiring', 'Add or reduce capacity within two weeks. No re-recruiting, no re-onboarding from scratch.'],
]

export const coverage = {
  rows: [
    ['Delivery centres', 'Pakistan'],
    ['Account teams', 'United States'],
    ['Coverage', 'US Eastern to Pacific business hours'],
  ],
}

export const plans = [
  {
    id: 'starter',
    name: 'Starter Support',
    price: '$1,500–2,500',
    priceNote: 'per month',
    short: 'Shared resources for repeatable work.',
    body: 'Shared resources for repeatable, low-volume work.',
    includes: [
      'Shared resource pool',
      '40–80 hours a month',
      'Weekly written status',
      'Single point of contact',
      'Business-hours coverage',
    ],
    roles: 'Typical roles: data entry, AR/AP support',
  },
  {
    id: 'dedicated',
    name: 'Dedicated Resource',
    flag: 'Most engagements start here',
    price: '$2,800–4,500',
    priceNote: 'per month',
    short: 'A specialist who owns a function and reports weekly.',
    body: 'A full- or part-time specialist who owns a function and reports to you weekly.',
    includes: [
      'Named specialist',
      'Full or part time',
      'Documented SOPs in your stack',
      'Weekly KPI report',
      'Monthly business review',
      'US time-zone coverage',
      'Backup resource',
    ],
    roles: 'Typical roles: AR specialist, support agent, data analyst',
  },
  {
    id: 'managed',
    name: 'Managed Team',
    price: 'Custom',
    priceNote: 'scoped with you',
    short: 'Several specialists under a Baxio lead and QA.',
    body: 'Several specialists under a Baxio team lead with QA and a single SLA.',
    includes: [
      'Team lead and QA',
      'Process management',
      'KPI dashboards',
      'Monthly business review',
      'Quarterly reviews',
      'Single SLA',
      'Scale within two weeks',
    ],
    roles: 'Typical roles: full finance team, service team, reporting team',
  },
]

export const plansNote = 'Every engagement includes onboarding, SOP documentation and a 30-day pilot.'

export const erpNote = 'ERP implementations are scoped and priced as a project, separately from the monthly plans.'

// Like-for-like cost of one full-time role. Every figure is a year unless the label says otherwise.
// Baxio annual = 12 x the Dedicated Resource monthly range ($2,800-4,500), so the two columns reconcile
// with the plan prices above. In-house total = 72,000 + 18,000 + (8,000-15,000) + 2,500 + 12,000.
export const tco = {
  columns: ['Cost component', 'In-house US hire', 'Baxio Dedicated'],
  rows: [
    ['Base salary, a year', '$72,000', '$33,600–54,000'],
    ['Benefits and payroll tax, a year', '$18,000', 'Included'],
    ['Recruiting and onboarding, one-off', '$8,000–15,000', 'Included'],
    ['Equipment and software, a year', '$2,500', 'Included'],
    ['Management overhead, a year', '~$12,000', 'Reduced; team lead included'],
    ['Time to productive', '8–12 weeks', '2 weeks'],
  ],
  total: ['Estimated cost, first year', '$112,500–119,500', '$33,600–54,000'],
  monthly: ['Equivalent per month', '$9,400–10,000', '$2,800–4,500'],
  caption:
    'Illustrative. Based on a US metro mid-level operations role at a $72,000 base. Baxio figures are twelve times the Dedicated Resource monthly range; final pricing is confirmed in writing before the pilot.',
}

export const faqItems = [
  {
    q: 'How quickly can we start?',
    a: 'We reply within one business day and send a written proposal within three business days of the scoping call. Onboarding takes two weeks, and the 30-day pilot starts straight after. Managed Teams can take a further one to two weeks to reach full capacity.',
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
    a: 'Each function has documented SOPs, weekly QA scoring and a team lead responsible for output. QA results are part of your weekly status, so quality is visible rather than assumed.',
  },
  {
    q: 'What time zones do you support?',
    a: 'US Eastern to Pacific business hours, Monday to Friday, 8am to 8pm ET, on every plan. After-hours and weekend coverage is available on Dedicated Resource and Managed Team engagements.',
  },
  {
    q: 'Do you provide reporting?',
    a: 'Every engagement includes a weekly written status. Dedicated Resource and Managed Team engagements add a monthly business review; Managed Teams also receive KPI dashboards and quarterly reviews.',
  },
]

export const values = [
  ['Operator-led', 'Founded by people who ran offshore teams inside a US company, not a recruiting agency that pivoted.'],
  ['Process before people', 'We document the work first. The right person is hired against a clearly defined role, not the other way around.'],
  ['Honest reporting', 'You hear the bad news first. Misses are surfaced with a fix attached.'],
  ['Long engagements', 'We optimise for clients who stay for years, not for headcount we can churn through.'],
]

// Listed alphabetically. No ranking is implied by order or title.
export const leadership = [
  {
    name: 'Mohsin Abbasi',
    title: 'Operations and Client Support Lead',
    bio: 'Runs day-to-day delivery, client follow-up and escalations across accounts.',
  },
  {
    name: 'Mueez Ur Rehman',
    title: 'Head of Offshore Operations',
    bio: 'Leads FP&A, pricing, reporting and analytics. Turns financial planning into documented processes the delivery teams run.',
  },
  {
    name: 'Peet Van Der Schyff',
    title: 'Chief Executive Officer',
    bio: 'Chief Financial Officer of MWD. Senior finance and logistics-finance leadership; the discipline behind Baxio’s finance, accounting and reporting work.',
  },
  {
    name: 'Shahid Latif Khan',
    title: 'Chairman of the board',
    bio: 'President and CEO of Metropolitan Warehouse & Delivery, a nationwide furniture logistics platform. Connects Baxio’s finance, operations and support practices to execution at scale.',
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

export const clientLogos = [
  { file: 'barami.png', name: 'Barami' },
  { file: 'ddc.png', name: 'DDC' },
  { file: 'mwd.avif', name: 'Metropolitan Warehouse & Delivery', tall: true },
  { file: 'mwd-premier.avif', name: 'MWD Premier', tall: true },
  { file: 'patrizialuca.png', name: 'Patrizia Luca' },
]
