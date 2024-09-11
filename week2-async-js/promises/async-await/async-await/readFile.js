const fs = require("fs");

function readFileAsync() {
  return new Promise(function (resolve, reject) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync()
  .then(function (data) {
    console.log(data);
    console.log("file has been read");
  })
  .catch(function (err) {
    console.log(err);
  });
