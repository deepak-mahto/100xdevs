const express = require("express");
const app = express();

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.get("/subtract", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const subtract = a - b;
  res.send(subtract.toString());
});

app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const multiply = a * b;
  res.send(multiply.toString());
});

app.get("/divide", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  if (b !== 0) {
    const divide = a / b;
    res.send(divide.toString());
  } else {
    res.json({
      msg: "can not divide by 0",
    });
  }
});

app.get("/remainder", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const remainder = a % b;
  res.send(remainder.toString());
});

app.listen(3000);
