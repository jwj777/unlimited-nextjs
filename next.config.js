/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", 'https://unlimited-logistics-media.s3.us-east-2.amazonaws.com'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unlimited-logistics-media.s3.us-east-2.amazonaws.com',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/flatbed/',
        destination: '/service/flatbed',
        permanent: true,
      },
      {
        source: '/category/industry-news/',
        destination: '/page/resources',
        permanent: true,
      },
    ]
  }
}



