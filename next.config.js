/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['drkormos-hu.pages.dev', 'drkormos.hu']
    }
  },
  outputFileTracing: false
};

module.exports = nextConfig;
