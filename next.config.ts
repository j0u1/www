import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://avatar.spoverlay.ru/face/d1yy?w=52')],
  },
};

export default nextConfig;
