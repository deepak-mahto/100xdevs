/**
 * Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
 */

const express = require("express");
const app = express();
let requestCount = 0;

function loggerMiddleware(req, res, next) {
  requestCount = requestCount + 1;
  next();
}

app.use(loggerMiddleware);

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a + b,
  });
});

app.get("/requestCount", (req, res) => {
  res.json({
    totalRequestCount: requestCount,
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
