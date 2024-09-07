const axios = require("axios");
const url = "https://www.postb.in/1725665005591-9704479416832";

async function main(url) {
  const response = await axios.post(
    url,
    {
      username: "deepak",
      password: "12345678",
    },
    {
      headers: {
        Authorization: "Bearer 123",
      },
    }
  );
  console.log(response.data);
}

main(url);
