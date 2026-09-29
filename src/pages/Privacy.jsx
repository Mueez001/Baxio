import usePageMeta from '../hooks/usePageMeta.js'
import { contact } from '../content/site.js'

// PENDING LAWYER REVIEW. Plain-English interim policy, approved by the founder on 29 Sep 2026.
// Replace with the lawyer's text (WC-01) when it is ready. Update the processor list if the site
// moves domain or adds a booking tool or analytics.

const sections = [
  ['Who we are', 'Baxio Inc. is a New Jersey company. This policy covers this website.'],
  [
    'What we collect',
    'When you use the contact form, we collect what you type: your name, work email, company, role, what you need help with and your message. When you use the chat assistant, we collect your answers to its questions (name, work email, company, role, the service you need, team size, volumes, tools, timing, budget, pain points and goals) and the chat messages. We do not ask for payment details.',
  ],
  [
    'Why we collect it',
    'Only to reply to your inquiry. We do not sell or rent your details, and we do not use them for advertising.',
  ],
  [
    'Who processes it',
    'Form messages pass through FormSubmit to reach our inbox. Chat messages pass through Vercel, then FormSubmit. The site is hosted on GitHub Pages and loads fonts from Google Fonts, which see your IP address when you visit.',
  ],
  [
    'Cookies',
    'This site does not set advertising or analytics cookies. We do not respond to browser Do Not Track signals, because we do not track you across sites.',
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
        <p className="lead container-prose mt-6">Last updated: 29 September 2026.</p>
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
