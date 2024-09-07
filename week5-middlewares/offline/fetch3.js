const url = "https://www.postb.in/1725665005591-9704479416832";

async function main(url) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer 123",
    },
  });
  const textualData = await response.text();
  console.log(textualData);
}

main(url);
