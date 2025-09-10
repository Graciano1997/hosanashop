import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
     turbopack: {
      root: __dirname, // força o root para a pasta do projeto
    },
};

export default nextConfig;
