import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site collapsed from multi-page to a single page; redirect the legacy
  // routes to their in-page sections so old links / SEO don't 404.
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/company", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
