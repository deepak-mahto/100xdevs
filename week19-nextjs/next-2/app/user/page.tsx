import axios from "axios";

export default async function User() {
  const response = await axios.get("http://localhost:3000/api/v1/user/details");
  await new Promise((r) => setTimeout(r, 5000));

  const data = response.data;

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
    </div>
  );
}
