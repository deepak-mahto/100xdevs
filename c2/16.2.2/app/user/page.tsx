import { getServerSession } from "next-auth";

export default async function () {
  const session = await getServerSession();
  return (
    <div>
      <h1>Server component</h1>
      {JSON.stringify(session)}
    </div>
  );
}
