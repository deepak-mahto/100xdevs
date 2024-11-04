const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(`data: ${data}`);
    let newData = data.trim();
    fs.writeFile("b.txt", newData, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }
  fs.readFile("b.txt", "utf-8", (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(`Data: ${data}`);
    }
  });
});
