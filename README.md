# Baxio website

Marketing site for Baxio: offshore execution for US mid-market businesses (finance, support, operations and analytics), run with documented process and weekly reporting. The site is a short sequence of quiet statements on white, grey and black grounds, built the way a weekly status report is built: paper, near-black type, one type family and one crimson mark.

## Stack

- Vite 5, with `base: '/Baxio/'` in `vite.config.js` because the site is served as a GitHub Pages project site
- React 18
- Tailwind CSS 3.4
- react-router-dom 6 using `HashRouter` (see `src/main.jsx`)
- Deployed to GitHub Pages on every push to `master` by `.github/workflows/deploy.yml`

## Design system

Typography is Mona Sans, a single variable font loaded from Google Fonts (weights 400 to 700, widths 90 to 110). Colour and spacing tokens (paper, ink, crimson and the neutral scale, the two radii, the two shadows, the type scale) live in `tailwind.config.js`. Reusable component classes (containers, sections, grounds, type styles, buttons, rules, rows, tables, the status sheet, form fields, the navbar and the chat pill) live in `src/index.css`. All copy, including contact details, plans, prices, FAQ entries, values, leadership and client logos, is defined once in `src/content/site.js` and imported by the pages; nothing is retyped in JSX.

## Running locally

```bash
npm install
npm run dev
npm run build
```

`npm run dev` serves the site at http://localhost:5173/Baxio/ (the `/Baxio/` path comes from the Vite `base` setting; the bare root shows nothing). `npm run build` writes the production bundle to `dist/`, and `npm run preview` serves that bundle at the same path.

## Environment variables

Copy `.env.example` to `.env` and adjust as needed. Both variables have working defaults in the code, so the site runs without a `.env` file.

- `VITE_CONTACT_FORM_ENDPOINT`: the FormSubmit AJAX endpoint the contact form posts to. This is the delivery inbox for submissions; the public contact email shown on the site is `contact.email` in `src/content/site.js`.
- `VITE_CHATBOT_WEBHOOK_URL`: the webhook that receives chatbot intake submissions. The receiver is the Vercel function in `backend/vercel/api/chatbot-intakes.js`; see `backend/vercel/README.md` for deployment.

## Project structure

```
src/
  components/   Layout, Navbar, Footer, CTASection, FAQ, LogoCloud, Sheet, CoverageRule, ChatbotWidget
  content/      site.js, the single source of truth for copy
  hooks/        usePageMeta
  pages/        Home, Services, HowWeWork, Pricing, About, Contact, NotFound
  index.css     Tailwind layers and component classes
  main.jsx      App bootstrap and router
  App.jsx       Routes
public/         Brand assets served from the site root (see below)
TrustedClients/ Client logos imported by the logo strip
backend/vercel/ The chatbot intake webhook, deployed separately to Vercel
```

## Client logos

Client logos live in `TrustedClients/` at the repository root (PNG and AVIF) and are imported by the logo strip with relative paths, for example `../../TrustedClients/barami.png`. The list of logos and their alt text is `clientLogos` in `src/content/site.js`.

## Brand assets

The files in `public/` are served from the site root:

- `wordmark.png`: the crimson Baxio wordmark (transparent PNG, 840x280), used in the navbar, the footer, the status sheet and the chat panel
- `favicon-32.png` and `favicon-64.png`: browser favicons
- `apple-touch-icon.png`: iOS home screen icon
- `icon-512.png`: large app icon, also the Open Graph image
