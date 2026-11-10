// GET /api/projects — lists files in a public Google Drive folder.
// Env: GOOGLE_API_KEY, GOOGLE_DRIVE_FOLDER_ID
// Tip: put a short description on each file in Drive (right-click → File information → Details → Description);
// it is shown on the project card. Subfolders are listed too and open in Drive.
export default async function handler(req, res) {
  const key = process.env.GOOGLE_API_KEY
  const folder = (req.query.folder || process.env.GOOGLE_DRIVE_FOLDER_ID || '').replace(/[^\w-]/g, '')
  if (!key || !folder) {
    return res.status(200).json({ configured: false, files: [] })
  }

  const params = new URLSearchParams({
    q: `'${folder}' in parents and trashed = false`,
    key,
    pageSize: '50',
    orderBy: 'modifiedTime desc',
    fields: 'files(id,name,mimeType,description,thumbnailLink,webViewLink,iconLink,modifiedTime)',
  })

  try {
    const r = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`)
    const data = await r.json()
    if (!r.ok) {
      return res.status(502).json({ configured: true, error: data.error?.message || 'Drive request failed', files: [] })
    }
    const files = (data.files || []).map((f) => ({
      id: f.id,
      name: f.name.replace(/\.[a-z0-9]{2,5}$/i, ''),
      description: f.description || '',
      mimeType: f.mimeType,
      isFolder: f.mimeType === 'application/vnd.google-apps.folder',
      link: f.webViewLink || `https://drive.google.com/file/d/${f.id}/view`,
      // Public thumbnail endpoint works for files shared "Anyone with the link"
      thumbnail: `https://drive.google.com/thumbnail?id=${f.id}&sz=w800`,
      modified: f.modifiedTime,
    }))
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=3600')
    return res.status(200).json({ configured: true, files })
  } catch (e) {
    return res.status(500).json({ configured: true, error: String(e), files: [] })
  }
}
