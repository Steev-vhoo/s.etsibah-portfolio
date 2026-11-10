// GET /api/videos — latest uploads from a YouTube channel.
// Env: YOUTUBE_CHANNEL_ID (required), GOOGLE_API_KEY (optional — without it the public RSS feed is used)
export default async function handler(req, res) {
  const channel = (process.env.YOUTUBE_CHANNEL_ID || '').replace(/[^\w-]/g, '')
  const key = process.env.GOOGLE_API_KEY
  const max = Math.min(parseInt(req.query.max, 10) || 6, 15)
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
