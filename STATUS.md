# STATUS: Website

- **Purpose:** Baxio's marketing site: finance, support, operations, analytics and ERP work for US companies, run from written procedures with a weekly written status. It deploys to GitHub Pages on every push to master.
- **Status:** active. Brand v2 compliance pass pushed 2026-10-28. Per Baxio/Sales, it is not yet on go2baxio.com.
- **Last touched:** 2026-10-28
- **Stack:** React 18, Vite 5, Tailwind 3, react-router; GitHub Actions and GitHub Pages; FormSubmit contact form; Vercel function for chatbot intake (sub-project)
- **Built with:** Claude Code (.claude/ with launch.json and skills)
- **Parent:** none
- **Sub-projects:** backend/vercel
- **Visible dependencies:** Marketing_Assets (brand source: fonts, logos, icons and OG images copied into public/; copy rules from BRAND-BRIEF.md)
- **Notes (2026-10-26):** About page leadership now lists Shawn (President & CEO) and Peet (CFO) above Mueez (COO); the Advisory board section and `advisors` export were removed. Built locally; not committed or deployed. Later the same day: About leadership became a plain list (Shawn President & CEO, Peet CFO, Mueez COO, Zeeshan Ali CTO, Mohsin Abbasi Head of Administration), titles plus short bios only.
- **2026-10-26:** removed every "Our President & CEO and CFO are in the US" line from copy (location is now: New Jersey company, team in Pakistan). Shawn is written only as "Shawn Khan". Re-rendered affected outputs.
- **2026-10-26:** pushed to master (a25fa32) with Mueez's go; GitHub Pages deploy succeeded. Live About page shows the new leadership list and location line.
- **2026-10-28:** brought into full compliance with Marketing_Assets (brand v2 "The Ledger"): paper/ink/crimson tokens, Newsreader + IBM Plex Sans/Mono self-hosted, new wordmark, favicons and OG images. Copy: every price removed (Pricing is now "How engagements are priced"), hours/time-zone lines retired, "offshore" and "mid-market" removed, proof line added to How we work. Client logos and the MWD origin story kept (Mueez confirmed written permission). Pushed to master.
