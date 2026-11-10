// GET /api/videos — latest uploads from a YouTube channel.
// Env (all optional):
//   YOUTUBE_CHANNEL_ID — the "UC…" channel ID. If not set, it is looked up from the @handle
//                        in youtubeChannelUrl (src/data/site.js) or YOUTUBE_HANDLE.
//   GOOGLE_API_KEY     — uses the YouTube Data API; without it the public RSS feed is used.
import { site } from '../src/data/site.js'

let cachedId = null

async function resolveChannelId(key) {
  const fromEnv = (process.env.YOUTUBE_CHANNEL_ID || '').replace(/[^\w-]/g, '')
  if (fromEnv) return fromEnv
  if (cachedId) return cachedId

  const source = process.env.YOUTUBE_HANDLE || site.youtubeChannelUrl || ''
  const handle = (source.match(/@([\w.-]+)/) || [])[1]
  if (!handle) return ''

  if (key) {
    const r = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${encodeURIComponent('@' + handle)}&key=${key}`)
    const d = await r.json().catch(() => ({}))
    if (d.items?.[0]?.id) return (cachedId = d.items[0].id)
  }
  // No key (or lookup failed): read the channel ID from the public channel page
  const r = await fetch(`https://www.youtube.com/@${encodeURIComponent(handle)}`, {
    headers: { 'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'en' },
  })
  const html = await r.text()
  const id = (html.match(/"externalId":"(UC[\w-]{22})"/) || html.match(/channel_id=(UC[\w-]{22})/) || [])[1]
  return id ? (cachedId = id) : ''
}

export default async function handler(req, res) {
  const key = process.env.GOOGLE_API_KEY
  const max = Math.min(parseInt(req.query.max, 10) || 6, 15)
  let channel = ''
  try { channel = await resolveChannelId(key) } catch { channel = '' }
  if (!channel) return res.status(200).json({ configured: false, videos: [] })

  try {
    let videos = []
    if (key && channel.startsWith('UC')) {
      // Uploads playlist ID = "UU" + channel ID without the "UC" prefix
      const params = new URLSearchParams({
        part: 'snippet',
        playlistId: 'UU' + channel.slice(2),
        maxResults: String(max),
        key,
      })
      const r = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?${params}`)
      const data = await r.json()
      if (r.ok) {
        videos = (data.items || []).map(({ snippet: s }) => ({
          id: s.resourceId.videoId,
          title: s.title,
          published: s.publishedAt,
          thumbnail: s.thumbnails?.high?.url || `https://i.ytimg.com/vi/${s.resourceId.videoId}/hqdefault.jpg`,
        }))
      }
    }

    if (!videos.length) {
      const r = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channel}`)
      const xml = await r.text()
      videos = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].slice(0, max).map(([, e]) => {
        const id = (e.match(/<yt:videoId>(.*?)<\/yt:videoId>/) || [])[1]
        const title = (e.match(/<title>(.*?)<\/title>/) || [])[1] || ''
        const published = (e.match(/<published>(.*?)<\/published>/) || [])[1]
        return {
          id,
          title: title.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
          published,
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        }
      }).filter((v) => v.id)
    }

    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600')
    return res.status(200).json({ configured: true, channel, videos })
  } catch (e) {
    return res.status(500).json({ configured: true, error: String(e), videos: [] })
  }
}
