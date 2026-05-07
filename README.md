# Baxio Website

Premium, conversion-focused multi-page marketing site for Baxio — an offshore execution partner for US businesses.

## Stack

- React 18 + Vite
- React Router v6
- Tailwind CSS 3
- Inter + Plus Jakarta Sans (Google Fonts)

## Pages

- `/` Home
- `/services` Services
- `/how-we-work` How We Work
- `/pricing` Pricing (3-tier model + ROI + FAQ + CTA)
- `/about` About
- `/contact` Contact

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Chatbot backend sync

The chatbot always stores compiled intake docs in browser local storage. You can also send each intake to your backend webhook.

1. Create a `.env` file in the project root.
  (You can copy `.env.example` as a starting point.)
2. Add:

```bash
VITE_CHATBOT_WEBHOOK_URL=https://your-api.example.com/chatbot-intakes
```

3. Restart dev/build so Vite loads the env var.

When configured, each completed discovery intake is POSTed as JSON.

```json
{
  "id": "1715111111111_ab12cd",
  "createdAt": "2026-05-07T11:20:03.554Z",
  "source": "chatbot",
  "fields": {
    "fullName": "Jane Doe",
    "workEmail": "jane@company.com",
    "company": "Company Inc"
  },
  "summary": "# Discovery Intake\n...",
  "transcript": [],
  "syncStatus": "pending"
}
```

The Docs page displays sync status per entry: `Local only`, `Backend synced`, or `Sync failed`.

## Project structure

```
src/
  components/   Layout, Navbar, Footer, CTASection, FAQ, SectionHeader, LogoCloud
  pages/        Home, Services, HowWeWork, Pricing, About, Contact, NotFound
  index.css     Tailwind + design tokens
  main.jsx      App bootstrap
  App.jsx       Routes
```

## Design system

Defined in `tailwind.config.js`:

- Color tokens: `ink` (neutral), `brand` (deep blue), `accent` (emerald)
- Typography: `font-display` (Plus Jakarta Sans), `font-sans` (Inter)
- Component classes in `index.css`: `.btn-primary`, `.btn-accent`, `.btn-ghost`, `.card`, `.section`, `.container-x`, `.h-display`, `.h-section`, `.lead`, `.eyebrow`
