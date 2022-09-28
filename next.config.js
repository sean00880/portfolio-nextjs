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
  images: {
    unoptimized: true,
    domains: ['cdn.pixabay.com', 'media.giphy.com', 'i.ibb.co', 'cdn-icons-png.flaticon.com'],
},
};
