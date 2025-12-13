import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // 1. Existing Unsplash pattern
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // 2. Existing utfs.sh pattern
      { protocol: "https", hostname: "*.ufs.sh", pathname: "/**" },
      // 3. Existing utfs.io pattern
      { protocol: "https", hostname: "utfs.io", pathname: "/**" },
      // 4. ADDED: Pattern for i.pravatar.cc to fix the error
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        // Since i.pravatar.cc has paths like /150?u=alice.williams, '/**' is the safest path to cover all image sizes/queries.
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;