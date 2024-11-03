const url = "https://dummyjson.com/todos/1";

function main(url) {
  fetch(url).then(async (response) => {
    const json = await response.json();
    console.log(json.todo);
  });
}

main(url);
