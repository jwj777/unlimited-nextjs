/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


odule.exports = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", 'unlimited-logistics-media.s3.us-east-2.amazonaws.com'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unlimited-logistics-media.s3.us-east-2.amazonaws.com',
        port: '',
      },
    ],
  },
}
