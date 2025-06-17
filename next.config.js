/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {},
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
