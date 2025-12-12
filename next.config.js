/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Static export for static hosting
  images: {
    unoptimized: true, // Required for static export
    domains: [],
  },
  // Disable 404 page generation for static export
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  // Note: Security headers cannot be set via Next.js headers() function in static export mode.
  // Headers must be configured at the hosting provider level (server, CDN, etc.).
};

module.exports = nextConfig;
