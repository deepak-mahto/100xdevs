const fs = require("fs");
function cleanFile(filePath) {
  return new Promise(function (resolve) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(filePath, data, function () {
        resolve();
      });
    });
  });
}

cleanFile("a.txt").then(() => console.log("Done cleaning file"));
