"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
  const session = useSession();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            signIn();
          }}
        >
          Sign in
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      </div>
      {JSON.stringify(session)}
    </div>
  );
}
