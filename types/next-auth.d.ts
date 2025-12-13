// next-auth.d.ts (or wherever you put your type declarations)

import type { Role } from "@/lib/generated/prisma";
import type { DefaultSession, User as DefaultUser } from "next-auth";
import type { AdapterUser as BaseAdapterUser } from "@auth/core/adapters"; // 👈 1. NEW IMPORT

// ----------------------------------------------------------------------
// 2. EXTEND THE CORE ADAPTER USER (THE FIX FOR THE PRISMA ADAPTER)
// This tells the database adapter (Prisma) what fields to expect/return
// from the database, resolving the "adapter not detect" or missing property error.
declare module "@auth/core/adapters" {
  // Use the BaseAdapterUser (the Auth.js default) and extend it
  interface AdapterUser extends BaseAdapterUser {
    role: Role; // Your custom Prisma Role type
    // Add any other custom fields (e.g., department, bio)
  }
}
// ----------------------------------------------------------------------


// 3. EXTEND THE NEXT-AUTH USER (for use in the session callback)
declare module "next-auth" {
  export interface User extends DefaultUser {
    role: Role;
  }
  
  // 4. EXTEND THE SESSION (for use with useSession() client-side)
  /**
   * Extends the built-in session.user object to include `id` and `role`.
   */
  export interface Session {
    user: {
      id: string; // Crucial for database sessions
      role: Role;
    } & DefaultSession["user"]; // Keep the default properties (name, email, image)
  }
}