/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  presets: ["next/babel"],
  plugins: [["styled-components", { ssr: true }]],
};

module.exports = nextConfig;
