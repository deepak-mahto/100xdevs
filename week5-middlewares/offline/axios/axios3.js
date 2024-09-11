const axios = require("axios");
const url =
  " https://httpdump.app/dumps/aa5feaa0-7eae-4745-8947-4eef66833b19/?a=4&b=5";

async function main(url) {
  await axios({
    url: url,
    method: "POST",
    headers: {
      Authorization: "Bearer 123",
    },
    data: {
      username: "tom",
      password: "1234",
    },
  });
}

main(url);
