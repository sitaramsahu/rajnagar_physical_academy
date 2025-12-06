// lib/auth.js
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export const authOptions = {
  providers: [
    // 🔹 Admin Login
    CredentialsProvider({
      id: "admin-credentials", // unique id
      name: "AdminCredentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const client = await clientPromise;
          const db = client.db(process.env.MONGODB_DB);

          const admin = await db
            .collection("admins")
            .findOne({ email: credentials.email });

          console.log(
            "DEBUG (Admin): Found admin:",
            admin?.email || "not found"
          );

          if (!admin) return null;

          const isValid = await compare(credentials.password, admin.password);
          if (!isValid) return null;

          return {
            id: admin._id.toString(),
            name: admin.name,
            email: admin.email,
            role: "Admin",
          };
        } catch (err) {
          console.error("🔥 Error in admin authorize:", err);
          return null;
        }
      },
    }),

    // 🔹 User Login
    CredentialsProvider({
      id: "user-credentials", // unique id
      name: "UserCredentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const client = await clientPromise;
          const db = client.db(process.env.MONGODB_DB);

          const user = await db
            .collection("users")
            .findOne({ email: credentials.email });

          console.log("DEBUG (User): Found user:", user?.email || "not found");

          if (!user) return null;

          const isValid = await compare(credentials.password, user.password);
          if (!isValid) return null;

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: "User",
          };
        } catch (err) {
          console.error("🔥 Error in user authorize:", err);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token) session.user.role = token.role;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // 🔹 Role-based redirects
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (url.includes("srs-admin")) return `${baseUrl}/admin/profile`;
      if (url.includes("login")) return `${baseUrl}/user/profile`;
      return baseUrl;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login", // default sign-in page
    error: "/login", // optional error handling
  },
};
