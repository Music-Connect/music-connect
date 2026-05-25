import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: typeof window === "undefined" ? process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001" : "",
  fetchOptions: {
    credentials: "include",
  },
});
