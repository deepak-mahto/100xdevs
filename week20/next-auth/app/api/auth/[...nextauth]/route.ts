import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { use } from "react";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login with email",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        const user = {
          name: "deepak",
          id: "1",
          email: "deepakkumar@gmail.com",
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
