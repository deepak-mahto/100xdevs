const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("Hello from the abc endpoint");
});

app.post("/abc", (req, res) => {
  res.send("Hello world from post endpoint");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
