import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  middleware: ['middleware.js'],  // Ensure the middleware is applied globally or wherever needed
};

export default nextConfig;
