import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "shop.mitsubachi-kajuen.com",
          },
        ],
        destination: "https://mitsubachi-kajuen.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;