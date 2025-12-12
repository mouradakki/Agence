/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export only for production builds when EXPORT=true
  ...(process.env.NODE_ENV === 'production' && process.env.EXPORT === 'true' 
    ? {
        output: "export",
        images: {
          unoptimized: true,
        },
      }
    : {
        images: {
          domains: [],
        },
      }
  ),
  generateBuildId: async () => {
    return "build-" + Date.now();
  },
};

module.exports = nextConfig;
