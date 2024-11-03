const axios = require("axios");
const url = " https://httpdump.app/dumps/aa5feaa0-7eae-4745-8947-4eef66833b19";

async function main(url) {
  await axios.post(
    url,
    {
      username: "ram",
      password: "123456789",
    },
    {
      headers: {
        Authorization: "Bearer 123",
      },
    }
  );
}

main(url);
