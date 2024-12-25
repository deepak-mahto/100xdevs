import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  const userProfile = db.avatars.findOne({
    where: {
      email: session.email,
    },
  });
  return <div>{JSON.stringify(userProfile.avatar)}</div>;
}
