const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(data);
  }
});

for (let i = 0; i < 1000000000; i++) {
  i += 1;
  console.log(i);
}
