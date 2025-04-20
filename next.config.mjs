/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,

  experimental: {
    serverComponentsHmrCache: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kjilmspjtlrfccpzcfvn.supabase.co",
      },
    ],
  },
};

export default nextConfig;
