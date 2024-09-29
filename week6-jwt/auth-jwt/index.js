const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send({
    msg: "YOu hit the root endpoint.",
  });
});

app.listen(3000);
