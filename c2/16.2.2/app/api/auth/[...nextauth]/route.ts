import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials: any) {
        const username = credentials.username;
        const password = credentials.password;

        // const user = await prisma.user.findFirst({
        //   where: {
        //     email: username,
        //     password: password,
        //   },
        // });
        // if (!user) {
        //   return null;
        // }
        return {
          id: "1",
          name: "deepak kumar",
          email: "deepak@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});

export const GET = handler;
export const POST = handler;
