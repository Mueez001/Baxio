// Single source of truth for copy that must stay consistent across pages.
// Pages and components import from here; nothing below is duplicated elsewhere.

export const contact = {
  email: 'Peet@go2baxio.com',
  phone: '+1 229 265 2892',
  phoneHref: 'tel:+12292652892',
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
    engagement: 'Scoped after a discovery call and quoted as a project.',
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
    ['Delivery centres', 'Pakistan'],
    ['Coverage', 'US Eastern to Pacific business hours'],
  ],
}

// One line used where the full Pricing page is not shown (Services, chatbot).
export const pricingLine =
  'Monthly roles start from $1,250 a person. Analytics builds are fixed-price after a free review. Managed accounting departments and ERP projects are quoted after a scoping call. See the Pricing page, or ask for a custom quote.'

// Prices by service. Sources: BusinessPlan/drafts/pricing-document.md rate card,
// drafts/council-review-01.md, proposals/*/notes.md. All "starting from". Ids match practices.
export const pricingSource =
  'All prices are in US dollars. Software subscriptions and licences stay in your name and are not included.'

export const pricing = [
  {
    id: 'finance',
    model: 'Monthly, per person',
    intro: 'Each person works your business hours. Employment, office, equipment, security controls, supervision and replacement are included. No set-up fee.',
    rows: [
      {
        item: 'Part-time bookkeeper',
        desc: 'Keeps the books current for a business with lighter volumes: bank and card feeds, coding, reconciliations and a monthly close checklist. Minimum 40 hours a month.',
        price: 'from $1,750',
        unit: 'a month',
      },
      {
        item: 'Bookkeeping specialist, full time',
        desc: 'Runs accounts payable and receivable, bank and card reconciliations and vendor statements every working day.',
        price: 'from $2,950',
        unit: 'a month',
      },
      {
        item: 'Staff accountant, full time',
        desc: 'Owns your month-end close: accruals, prepaids, balance sheet reconciliations and a management reporting pack.',
        price: 'from $3,250',
        unit: 'a month',
      },
      {
        item: 'Senior accountant',
        desc: 'Reviews the close, handles complex reconciliations and supports audit and tax preparation.',
        price: 'Custom quote',
        unit: '',
      },
      {
        item: 'Managed accounting department: Essentials',
        desc: 'AP, AR, reconciliations, month-end close and a monthly pack, staffed and supervised by us.',
        price: 'Custom quote',
        unit: '',
      },
      {
        item: 'Managed accounting department: Controller-led',
        desc: 'Adds controller oversight of the close, controls, audit support and reporting.',
        price: 'Custom quote',
        unit: '',
      },
    ],
    notes: ['Managed departments are quoted after we review your volumes and close calendar.', 'Starts with a 30-day pilot.'],
  },
  {
    id: 'support',
    model: 'Monthly, per full-time person',
    intro: 'One full-time person on one 8-hour shift in your time zone. No set-up fee.',
    rows: [
      {
        item: 'Customer service representative',
        desc: 'Answers email, chat and voice in your tone of voice and to your SLAs, with weekly QA scoring.',
        price: 'from $1,450',
        unit: 'a month',
      },
    ],
    notes: ['Offered alongside at least one accounting or operations role.'],
  },
  {
    id: 'operations',
    model: 'Monthly, per full-time person',
    intro: 'One full-time person on one 8-hour shift in your time zone. No set-up fee. The three roles differ by scope: records, a team’s processes, or one executive’s day.',
    rows: [
      {
        item: 'Data entry specialist',
        desc: 'Keys, checks and updates records to a written procedure: orders, invoices, product and CRM data. High volume, no judgement calls.',
        price: 'from $1,250',
        unit: 'a month',
      },
      {
        item: 'Administrative assistant',
        desc: 'Runs back-office processes for a team: order processing, purchase orders and vendor follow-up, inventory and CRM upkeep, documents and shared inboxes.',
        price: 'from $1,650',
        unit: 'a month',
      },
      {
        item: 'Executive assistant',
        desc: 'Works for one named executive: calendar, inbox, travel, meeting preparation and follow-ups, including confidential matters.',
        price: 'from $2,100',
        unit: 'a month',
      },
    ],
    notes: ['Data entry is offered alongside at least one other role.'],
  },
  {
    id: 'analytics',
    model: 'Review, build, then run',
    intro: 'Every analytics engagement starts with a free review of your data and the decisions you need it for. We then build your reporting, and keep it running for you.',
    rows: [
      {
        item: 'Data review',
        desc: 'We look at your systems, your data and the decisions you need it for, then send a written plan with a fixed price for the build.',
        price: 'Free',
        unit: '',
      },
      {
        item: 'Reporting build',
        desc: 'Agreed definitions for every metric, a clean data model and 3 to 5 dashboards, built in your own workspace and handed over with documentation.',
        price: 'from $4,000',
        unit: 'per project',
      },
      {
        item: 'Monthly reporting and KPI pack',
        desc: 'Your KPIs every month, with written commentary.',
        price: 'from $700',
        unit: 'a month',
      },
      {
        item: 'Dedicated data analyst, full time',
        desc: 'Your own analyst, working your business hours. They:',
        covers: [
          'Keep your dashboards and scheduled reports current and correct',
          'Build new reports and answer ad-hoc questions from your team',
          'Clean and join data across your systems: accounting, CRM, orders and support',
          'Check reported totals against your books after each month-end',
          'Look across the business for trends and problems nobody asked about, and flag them in the weekly status',
          'Prepare your weekly and monthly KPI packs',
        ],
        price: 'from $3,500',
        unit: 'a month',
      },
    ],
    notes: ['Built in your own workspace, in the tool you already use or the one we recommend.'],
  },
  {
    id: 'erp',
    model: 'Scoped and quoted as a project',
    intro: 'Every implementation starts with a discovery call. We map your processes, systems and data, then send a written scope and quote before any work starts.',
    rows: [],
    notes: ['Discovery and the written quote are free.'],
  },
]

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
  ['Process before people', 'We document the work first. Then the right person is assigned to a clearly defined role, not the other way around.'],
  ['Honest reporting', 'You hear the bad news first. Misses are surfaced with a fix attached.'],
  ['Long engagements', 'We aim for clients who stay for years, not for headcount we can churn through.'],
]

// Listed alphabetically. No ranking is implied by order or title.
export const leadership = [
  {
    name: 'Mohsin Abbasi',
    title: 'Partner',
    bio: 'Runs day-to-day delivery, client follow-up and escalations across accounts.',
  },
  {
    name: 'Mueez Ur Rehman',
    title: 'Chief Operating Officer',
    bio: 'Leads FP&A, pricing, reporting and analytics. Turns financial planning into documented processes the delivery teams run.',
  },
  {
    name: 'Peet Van Der Schyff',
    title: 'Chief Financial Officer',
    bio: 'Chief Financial Officer of MWD. Senior finance and logistics-finance leadership; the discipline behind Baxio’s finance, accounting and reporting work.',
  },
  {
    name: 'Shahid Latif Khan',
    title: 'President and Chief Executive Officer',
    bio: 'President and CEO of Metropolitan Warehouse & Delivery, a nationwide furniture logistics platform. Connects Baxio’s finance, operations and support practices to execution at scale.',
  },
  {
    name: 'Zeeshan Ali',
    title: 'Partner',
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
  { name: 'Wendover' },
]

// ---- Redesign 29 Sep 2026 ----
// Every line below restates a fact already on the site (contact, timeline, principles, About).
// Nothing new is claimed here.

// The one primary action, used on every button that leads to /contact.
export const ctaLabel = 'Book a scoping call'

// Hero value proposition. Restates the Home meta line and the coverage rows.
export const heroLead =
  'Accounting, customer support, operations, analytics and ERP work, done by a named team in Pakistan that works your business hours and reports to you in writing every week.'

// The fact strip under the hero. Sources: About (New Jersey, Islamabad), coverage, timeline.
export const heroFacts = [
  ['Company', 'Baxio Inc., registered in New Jersey'],
  ['Team', 'Islamabad, Pakistan'],
  ['Hours', 'US Eastern to Pacific business hours'],
  ['First step', 'A 30-day pilot against written KPIs'],
]

// The trust section on Home. Each line is taken from `principles` above.
export const trustPoints = [
  {
    name: 'Secure access',
    body: 'Each person has their own login with multi-factor sign-in, and works on a company laptop.',
  },
  {
    name: 'Documented process',
    body: 'Every workflow we run is documented in your system. If a person leaves, the process does not.',
  },
  {
    name: 'One accountable person',
    body: 'A named person is accountable for your work, and you get a written status every week.',
  },
  {
    name: 'KPIs in writing',
    body: 'Pilots and steady-state engagements are measured against KPIs you sign off on in writing.',
  },
]

// Footer social links. PLACEHOLDER: add the LinkedIn company page URL when it exists.
// A link with an empty href is not shown on the live site; in `npm run dev` it shows as a
// dashed placeholder so it is easy to spot.
export const social = [{ name: 'LinkedIn', href: '' }]
