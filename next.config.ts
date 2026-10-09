
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/nour-portfolio",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
