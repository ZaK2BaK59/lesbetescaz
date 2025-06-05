import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zupimages.net",
      },
      {
        protocol: "https",
        hostname: "images.prd.dlivecdn.com",
      },
      {
        protocol: "https",
        hostname: "image.dlivecdn.com",
      },
    ],
  },
};

export default nextConfig;
