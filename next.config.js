/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://naszsklep.vercel.app/products'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
