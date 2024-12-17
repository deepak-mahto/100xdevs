import axios from "axios";

export default async function User() {
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  const data = response.data;

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
    </div>
  );
}
