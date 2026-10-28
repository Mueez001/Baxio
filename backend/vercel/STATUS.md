# STATUS: Website backend (vercel)

- **Purpose:** A Vercel serverless webhook (`POST /api/chatbot-intakes`). It validates website chatbot intake submissions, handles CORS, and emails a summary.
- **Status:** active. Deployed on Vercel; code last changed 2026-09-29 and fully committed.
- **Last touched:** 2026-09-29
- **Stack:** Node ESM (no dependencies), Vercel CLI (`vercel dev`)
- **Built with:** Claude Code (through the parent Website repo's `.claude/`)
- **Parent:** Baxio/Website
- **Sub-projects:** none
- **Visible dependencies:** none found
- **Notes:** Lives inside the Website git repo (no .git of its own). `Website/src/components/ChatbotWidget.jsx` hardcodes the endpoint URL, and `.env.example` documents it.
