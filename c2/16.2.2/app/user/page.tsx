import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

export default async function () {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      <Appbar />
      <h1>Server component</h1>
      {JSON.stringify(session)}
    </div>
  );
}
