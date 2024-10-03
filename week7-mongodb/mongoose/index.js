const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send({
    msg: "learning library called mongoose",
  });
});

app.listen(3000);
