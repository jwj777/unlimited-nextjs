/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
  reactStrictMode: true,
  images: {
    loader: "default",
    // domains: ["localhost", 'unlimited-logistics-media.s3.us-east-2.amazonaws.com', '/_next/image', 'unlimitedlogistics.net'],
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
        source: '/flatbed',
        destination: '/service/flatbed',
        permanent: true,
      },
      {
        source: '/category/industry-news',
        destination: '/page/resources',
        permanent: true,
      },
      {
        source: '/dry',
        destination: '/service/dry-van',
        permanent: true,
      },
      {
        source: '/track-shipments',
        destination: '/page/track-shipments',
        permanent: true,
      },
      {
        source: '/carriers',
        destination: '/page/carrier-setup',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/page/contact',
        permanent: true,
      },
      {
        source: '/refrigerated',
        destination: '/service/refrigerated',
        permanent: true,
      },
      {
        source: '/request-quote',
        destination: '/page/contact',
        permanent: true,
      },
      {
        source: '/industries',
        destination: '/',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/page/resources',
        permanent: true,
      },
      {
        source: '/category/company-news',
        destination: '/page/resources',
        permanent: true,
      },
      {
        source: '/meet-the-team',
        destination: '/page/about',
        permanent: true,
      },
      {
        source: '/ltl',
        destination: '/service/ltl-services',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/page/careers',
        permanent: true,
      },
      {
        source: '/parcel-analytics',
        destination: '/service/software',
        permanent: true,
      },
      {
        source: '/unlimited-in-action',
        destination: '/page/resources',
        permanent: true,
      },
      {
        source: '/job-listings',
        destination: '/page/careers',
        permanent: true,
      },     
      {
        source: '/joining-the-ranks-of-kansas-citys-fastest-growing-companies',
        destination: '/page/resources',
        permanent: true,
      },
    ]
  }
}



