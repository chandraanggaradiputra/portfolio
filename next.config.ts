import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
