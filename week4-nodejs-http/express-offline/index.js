// basic http server

const express = require("express");

function calculateSum(a, b) {
  return parseInt(a) + parseInt(b);
}

const app = express();

app.get("/", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const sum = calculateSum(a, b);
  res.send(sum.toString());
});

app.listen(3000);
