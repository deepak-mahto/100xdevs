import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {data.name}
      {data.email}
    </div>
  );
}
