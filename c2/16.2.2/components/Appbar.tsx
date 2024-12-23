"use client";
import { useRouter } from "next/navigation";

export default function Appbar() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push("/api/auth/signin");
        }}
      >
        Sign in
      </button>
    </div>
  );
}
