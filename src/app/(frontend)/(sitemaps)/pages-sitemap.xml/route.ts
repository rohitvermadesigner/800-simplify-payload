import { getServerSideSitemap } from 'next-sitemap'
import { unstable_cache } from 'next/cache'

const getPagesSitemap = unstable_cache(
  async () => {
    const SITE_URL = (
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://www.800-simplify.com'
    ).replace(/\/$/, '')

    const dateFallback = new Date().toISOString()

    const pagePaths = ['/', '/audit', '/accounting', '/taxation', '/pro']

    return pagePaths.map((path) => ({
      loc: `${SITE_URL}${path === '/' ? '/' : path}`,
      lastmod: dateFallback,
    }))
  },
  ['pages-sitemap'],
  {
    tags: ['pages-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getPagesSitemap()

  return getServerSideSitemap(sitemap)
}
