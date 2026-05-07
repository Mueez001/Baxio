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
