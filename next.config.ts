import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'export' for development
  // Add it back only when building for production
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
