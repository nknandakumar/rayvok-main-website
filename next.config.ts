import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow ngrok and other tunnel origins in dev
  allowedDevOrigins: [
    "localhost:3000",
    "127.0.0.1:3000",
    "*.ngrok-free.app",
    "*.ngrok.io",
    "*.ngrok.app",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: ".pinimg.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
