# Lead inbox setup (Google Sheet + email)

Every contact-form and chat-assistant lead is saved as a row in a Google Sheet, then emailed to
mueez@go2baxio.com. The script is `Code.gs` in this folder. It runs under the Google account that deploys it.

## One-time setup (about 5 minutes)

1. Use the **BaxioINC Gmail account**, not a personal one. Open a private/incognito window, sign in to only
   that account (Apps Script misbehaves when several Google accounts are signed in), then create a blank sheet
   at https://sheets.new. Name it **Baxio website leads**. Lead emails will be sent from this account.
2. In the sheet: **Extensions → Apps Script**. Delete what is in the editor, paste in all of `Code.gs`, and click **Save**.
   Or make a standalone project at https://script.new and set `SHEET_ID` in `Code.gs` to the sheet's ID (the long
   part of its URL). The live setup is standalone: project and sheet are both named "Baxio website leads" on baxioinc@gmail.com.
3. In the function dropdown at the top, pick **testLead** and click **Run**. Google asks for permission:
   choose your account, click **Advanced → Go to (project name)**, then **Allow**. The warning appears
   because this is your own unpublished script. Check that a "Leads" tab appeared with a test row and that the
   test email arrived at mueez@go2baxio.com.
4. Click **Deploy → New deployment**. Click the gear icon, choose **Web app**, and set:
   - Execute as: **Me**
   - Who has access: **Anyone**
   Click **Deploy** and copy the **Web app URL** (it ends in `/exec`).
5. Give that URL to Claude, or set it yourself as the GitHub repository variable `LEADS_SCRIPT_URL`
   (Settings → Secrets and variables → Actions → Variables) and re-run the deploy.

## Changing the script later

Edit the code in the Apps Script editor, then **Deploy → Manage deployments → (pencil) → Version: New version → Deploy**.
That keeps the same URL. A **New deployment** creates a new URL, which the site would then need.

## Limits

MailApp sends about 100 emails a day on a personal Google account and 1,500 on Google Workspace. If the
limit is hit, the lead is still saved in the sheet, marked `failed` in the `emailed` column.
