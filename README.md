# Portfolio

A one-page portfolio (Vite + React) with a projects gallery that loads from **Google Drive** and a **YouTube** section that shows recent uploads. Built to deploy on **Vercel**.

Sections: Home, Services, About, Experience, Projects (Google Drive), Videos (YouTube), Testimonials, Contact.

## Edit the content
- All text, links, stats, services, experience and testimonials: `src/data/site.js`
- Your photo: add a transparent PNG to `public/` (for example `public/profile.png`) and set `photo: '/profile.png'` in `site.js`
- Colours and fonts: the `:root` variables at the top of `src/styles.css`

## Run locally
```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev
```
The `/api/*` functions also run under `npm run dev`.

## Google Drive projects
1. Make a Drive folder for your projects (images, PDFs, Slides, subfolders) and share it as **Anyone with the link → Viewer**.
2. Copy the folder ID from `https://drive.google.com/drive/folders/<FOLDER_ID>`.
3. In [Google Cloud Console](https://console.cloud.google.com/), turn on the **Google Drive API** and the **YouTube Data API v3**, then create an **API key** (you can limit it to those two APIs).
4. Set `GOOGLE_API_KEY` and `GOOGLE_DRIVE_FOLDER_ID`.

Each file becomes a project card. The card shows the file's thumbnail and links to the file in Drive. To give a card a description, add one in Drive under File information → Details → Description. Until Drive is set up, the sample projects in `site.js` are shown.

## YouTube videos
Set `YOUTUBE_CHANNEL_ID` (the ID that starts with `UC…`, found under YouTube Studio → Settings → Channel → Advanced settings). If `GOOGLE_API_KEY` is set, the videos come from the YouTube Data API. If it isn't, the channel's public RSS feed is used, which needs no key. Also set `youtubeChannelUrl` in `site.js`.

## Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel, choose **Add New → Project** and import the repo. It detects Vite on its own.
3. Under **Settings → Environment Variables**, add `GOOGLE_API_KEY`, `GOOGLE_DRIVE_FOLDER_ID` and `YOUTUBE_CHANNEL_ID`, then redeploy.

The API keys are only used on the server, in the Vercel functions in `/api`, so they never reach the browser. Responses are cached for 10–15 minutes at the edge.
