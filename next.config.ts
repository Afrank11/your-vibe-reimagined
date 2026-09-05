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
      // /notes was renamed to /blog — keep the indexed URLs alive
      { source: "/notes", destination: "/blog", permanent: true },
      { source: "/notes/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/fr/notes", destination: "/fr/blog", permanent: true },
      { source: "/fr/notes/:slug", destination: "/fr/blog/:slug", permanent: true },
      { source: "/guestbook", destination: "/", permanent: true },
      // coach-marcus was demoted from case study to archive entry
      { source: "/work/coach-marcus", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
