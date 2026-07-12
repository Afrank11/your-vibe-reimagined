import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // Preserve index equity from the previous multi-page site.
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/experience", destination: "/#record", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/guestbook", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
