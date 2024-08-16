const fs = require("fs");

fs.writeFile("b.txt", "How you doin?", (err, data) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log("The file have saved!");
  }
});
