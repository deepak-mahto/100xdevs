const express = require("express");
const app = express();

// logs the method, url and timestamp

function loggerMiddleware(req, res, next) {
  console.log(`Method is ${req.method}`);
  console.log(`Route is ${req.url}`);
  console.log(`Host is ${req.hostname}`);
  console.log(new Date());
  next();
}

app.use(loggerMiddleware);

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.status(200).json({ ans: a + b });
});

app.get("/multiply", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  res.status(200).json({ ans: a * b });
});

app.get("/divide", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  res.status(200).json({
    ans: a / b,
  });
});

app.get("/subtract", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  res.status(200).json({
    ans: a - b,
  });
});

app.listen(3000, () => {
  console.log("App is listening at port 3000");
});
