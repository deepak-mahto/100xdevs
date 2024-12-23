"use client";

import { signIn, signOut } from "next-auth/react";

export default function Appbar() {
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
    </div>
  );
}
