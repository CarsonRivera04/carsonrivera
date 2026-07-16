import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Use NEXT_PUBLIC_BASE_PATH to control where assets are served from.
  // Leave empty for root-hosted sites (custom domains). When deploying to
  // GitHub Pages under a repo name, set NEXT_PUBLIC_BASE_PATH=/your-repo
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
    : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
