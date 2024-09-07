const url = "https://dummyjson.com/todos/1";

async function main(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.todo);
  } catch (error) {
    console.log(error);
  }
}

main(url);
