import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qu19rm474m.ufs.sh",
        pathname: "/f/**",
      },
    ],
  },
};

export default nextConfig;
