import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",

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
    GoogleProvider({
      clientId: "asd",
      clientSecret: "asd",
    }),
    GitHubProvider({
      clientId: "asd",
      clientSecret: "asd",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
