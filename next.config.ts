import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "15mb",
      allowedOrigins: [
        "localhost:3000",
        "*.devtunnels.ms",
        '172.30.127.196',
      ],
    },
  },
};

export default nextConfig;