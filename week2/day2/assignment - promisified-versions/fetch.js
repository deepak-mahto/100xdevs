function promisifiedFetch(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return reject(new Error("http error!"));
        }
        return resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
}

promisifiedFetch(`https://dummyjson.com/c/3029-d29f-4014-9fb4`)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
