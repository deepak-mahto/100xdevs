import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center flex-col">
      <h1>todo application</h1>
      <div>
        <Link className="text-md border m-4" href="/signin">
          Sign in
        </Link>{" "}
        <br />
        <Link className="text-md border m-4" href="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
