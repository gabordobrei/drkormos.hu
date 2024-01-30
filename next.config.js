/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['drkormos-hu.pages.dev']
    }
  }
};

module.exports = nextConfig;
