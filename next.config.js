/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  mode: 'jit',
}

module.exports = {
  experimental: {
    runtime: 'experimental-edge',
  },
};

