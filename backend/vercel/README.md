# Baxio Chatbot Webhook (Vercel)

This is a ready-to-deploy backend receiver for chatbot intake payloads.

## Endpoint

- POST /api/chatbot-intakes

## What it does

- Accepts chatbot intake payloads from the website.
- Validates required fields.
- Handles CORS for GitHub Pages and local dev.
- Returns a success response with id and timestamp.
- Forwards intake summary + transcript to mueez.rehman@gomwd.com.
- Logs intake metadata in Vercel runtime logs.

## Deploy steps

1. Install Vercel CLI.
2. Open this folder in terminal.
3. Run npm install.
4. Run vercel for first deployment.
5. After deployment, copy the production URL.

Live endpoint URL:
https://vercel-lake-kappa-40.vercel.app/api/chatbot-intakes

Optional backend env var:
CHATBOT_EMAIL_ENDPOINT=https://formsubmit.co/ajax/mueez.rehman@gomwd.com

If omitted, the endpoint above is used by default.

## Connect website

In your website repo, set environment variable:
VITE_CHATBOT_WEBHOOK_URL=https://vercel-lake-kappa-40.vercel.app/api/chatbot-intakes

Then rebuild and redeploy the site.

## Local test

Run:
npm run dev

Then test with:
curl -X POST http://localhost:3000/api/chatbot-intakes \
  -H "Content-Type: application/json" \
  -d "{\"id\":\"test_1\",\"createdAt\":\"2026-05-07T12:00:00.000Z\",\"source\":\"chatbot\",\"fields\":{\"fullName\":\"Jane Doe\",\"workEmail\":\"jane@company.com\",\"company\":\"Acme\"},\"summary\":\"# Discovery Intake\",\"transcript\":[],\"syncStatus\":\"pending\"}"

## Next extension points

- Persist payloads to a database.
- Forward to CRM.
- Add webhook signature verification.
