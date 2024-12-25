"use client";
import OneLogin from "next-auth/providers/onelogin";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <SessionProvider>
        <RealHome />
      </SessionProvider>
    </div>
  );
}

function RealHome() {
  const session = useSession();
  return (
    <div>
      next auth
      {session.status === "authenticated" ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <button onClick={() => signIn()}>Login</button>
      )}
    </div>
  );
}
