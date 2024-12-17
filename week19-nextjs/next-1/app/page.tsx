export default function Home() {
  return (
    <div>
      <Button>Sign in</Button>
      <Button>Sign up</Button>
    </div>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}
