/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.com/invite/5AfbW2kMB3",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/samkingco",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
