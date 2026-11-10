import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// In production Vercel runs the files in /api as serverless functions.
// This plugin runs the same handlers under `npm run dev`, reading keys from .env.local.
function localApi() {
  return {
    name: 'local-api',
    configureServer(server) {
      Object.assign(process.env, loadEnv('development', process.cwd(), ''))
      server.middlewares.use('/api', async (req, res, next) => {
        const url = new URL(req.url, 'http://localhost')
        const name = url.pathname.replace(/^\/|\/$/g, '')
        if (!/^[\w-]+$/.test(name)) return next()
        try {
          const mod = await server.ssrLoadModule(`/api/${name}.js`)
          req.query = Object.fromEntries(url.searchParams)
          res.status = (c) => { res.statusCode = c; return res }
          res.json = (d) => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(d)) }
          await mod.default(req, res)
        } catch {
          next()
        }
      })
    },
  }
}

export default defineConfig({ plugins: [react(), localApi()] })
