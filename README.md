# Portfolio

A one-page portfolio (Vite + React) with a projects gallery that loads from **Google Drive** and a **YouTube** section that shows recent uploads. Built to deploy on **Vercel**.

Sections: Home, Services, About, Learning & Experience, Selected Work (case studies + Google Drive), Photography, Videos (YouTube), Testimonials (hidden until added), Contact.

## Edit the content
- All text, links, stats, services, experience and testimonials: `src/data/site.js`
- Images: `public/images/` (hero cut-out `stephen.webp`, about `stephen-bw.webp`, case-study covers in `projects/`, photography in `photos/`)
- Optional in `site.js`: `resumeUrl` and `testimonials`. Empty values are hidden on the page.
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
Nothing to set up: the videos come from the channel in `youtubeChannelUrl` in `site.js` (currently `@Justeclipsed`). The serverless function finds the channel ID from the @handle and reads the channel's public feed.
Optional: set `YOUTUBE_CHANNEL_ID` (the `UC…` ID) to skip the lookup, and set `GOOGLE_API_KEY` to use the YouTube Data API instead of the feed.

## Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel, choose **Add New → Project** and import the repo. It detects Vite on its own.
3. For the Google Drive gallery, add `GOOGLE_API_KEY` and `GOOGLE_DRIVE_FOLDER_ID` under **Settings → Environment Variables**, then redeploy. YouTube works without any settings.

The API keys are only used on the server, in the Vercel functions in `/api`, so they never reach the browser. Responses are cached for 10–15 minutes at the edge.
