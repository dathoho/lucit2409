import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// 1. Call NextAuth(authConfig) to get the Auth object.
const { auth } = NextAuth(authConfig);

<<<<<<< HEAD
=======
// 2. Export the 'auth' function directly with the required 'middleware' name.
// This ensures Next.js recognizes it as a function export.
export { auth as middleware };
>>>>>>> 4874aa741357641bc97cd8d316f16db75e5bc438

// Your config remains correct
export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/appointments/:path*"],
};
