/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Static export for static hosting
  images: {
    unoptimized: true, // Required for static export
    domains: [],
  },
}

module.exports = nextConfig

