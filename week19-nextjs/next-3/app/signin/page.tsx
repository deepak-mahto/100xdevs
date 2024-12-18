export default function Signin() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border p-2">
        <input type="text" placeholder="Enter username" />
        <input type="password" placeholder="Enter password" />
        <button>Sign in</button>
      </div>
    </div>
  );
}
