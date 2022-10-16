/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  // useFileSystemPublicRoutes: false,
  poweredByHeader: false,
  env: {
    environment: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;
