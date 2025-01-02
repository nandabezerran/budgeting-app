import type { NextConfig } from "next";
import '../frontend/app/globals.css';

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
