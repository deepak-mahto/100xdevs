import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <div>
      next auth
      {session.status === "authenticated" ? "Logout" : "Login"}
    </div>
  );
}
