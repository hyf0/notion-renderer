/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: [
    {
      source: '/',
      destination: `/${process.env.NOTION_PAGE_ID}`,
      permanent: true,
    },
  ],
}

module.exports = nextConfig
