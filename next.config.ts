import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/carsonrivera",
  assetPrefix: "/carsonrivera",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
