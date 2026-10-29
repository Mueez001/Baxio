import usePageMeta from '../hooks/usePageMeta.js'
import { contact } from '../content/site.js'

// PENDING LAWYER REVIEW. Plain-English interim policy, approved by the founder on 29 Sep 2026.
// Replace with the lawyer's text (WC-01) when it is ready. Update the processor list if the site
// moves domain or adds a booking tool or analytics.

const sections = [
  ['Who we are', 'Baxio Inc. is a New Jersey company. This policy covers this website.'],
  [
    'What we collect',
    'When you browse the site, we collect usage data: the pages you view, the buttons and links you click, how far you scroll, the site that referred you and campaign tags in the link, plus your browser, device and approximate location. When you use the contact form, we collect what you type: your name, work email, company, role, what you need help with and your message. When you use the chat assistant, we collect your answers to its questions (name, work email, company, role, the service you need, team size, volumes, tools, timing, budget, pain points and goals) and the chat messages. We do not ask for payment details.',
  ],
  [
    'Why we collect it',
    'To reply to your inquiry, and to understand which pages and channels bring visitors so we can improve the site. We do not sell or rent your details, and we do not use them for advertising.',
  ],
  [
    'Who processes it',
    'Form messages pass through FormSubmit to reach our inbox. Chat messages pass through Vercel, then FormSubmit. Usage data goes to Google Analytics and Microsoft Clarity, which record page views, clicks and scrolling for us. Clarity masks what you type into forms. The site is hosted on GitHub Pages, which sees your IP address when you visit.',
  ],
  [
    'Cookies',
    'This site sets analytics cookies from Google Analytics and Microsoft Clarity. It does not set advertising cookies. It also stores in your browser where your first visit came from, so that if you contact us we know how you found us. If your browser sends a Global Privacy Control signal, we load no analytics at all. You can also block these cookies in your browser settings.',
  ],
  [
    'How long we keep it',
    'We keep inquiries for 24 months after our last contact with you, then delete them.',
  ],
  ['No sale of data', 'We do not sell your personal information.'],
  [
    'Deletion and questions',
    'To ask us to delete your details, or to see or correct them, email ' + contact.email + '.',
  ],
  ['Children', 'This site is for businesses. We do not knowingly collect data from children under 13.'],
  ['Changes', 'If we change this policy, we post the new version here and update the date.'],
]

export default function Privacy() {
  usePageMeta({
    title: 'Privacy policy | Baxio',
    description: 'How Baxio Inc. collects and uses the details you send through this website.',
  })

  return (
    <section className="section-hero ground-paper" aria-labelledby="privacy-title">
      <div className="container-page">
        <h1 id="privacy-title" className="display-l">
          Privacy policy.
        </h1>
        <p className="lead container-prose mt-6">Last updated: 29 October 2026.</p>
        <div className="section-air container-prose rows">
          {sections.map(([heading, text]) => (
            <div key={heading} className="border-b border-rule py-5 lg:py-6">
              <h2 className="h3">{heading}</h2>
              <p className="body mt-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
