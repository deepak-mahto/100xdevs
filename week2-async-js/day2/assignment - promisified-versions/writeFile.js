const fs = require("fs");

function promisifiedWriteFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

promisifiedWriteFile("b.txt", "i'm doin good!")
  .then(() => {
    console.log("file written successfully");
  })
  .catch((error) => {
    console.error("Error writing file - ", error);
  });
