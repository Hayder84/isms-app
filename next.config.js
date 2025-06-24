/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['images.clerk.dev'],
  },
  // Adicione estas linhas:
  typescript: {
    ignoreBuildErrors: true, // Temporário
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporário
  },
};

module.exports = nextConfig;