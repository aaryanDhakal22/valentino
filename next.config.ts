import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: '/valentino', 
  /* config options here */
};

export default nextConfig;
