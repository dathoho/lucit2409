import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// 1. Call NextAuth(authConfig) to get the Auth object.
const { auth } = NextAuth(authConfig);

// 2. Export the 'auth' function directly with the required 'middleware' name.
// This ensures Next.js recognizes it as a function export.
export { auth as middleware };

// Your config remains correct
export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/appointments/:path*"],
};
