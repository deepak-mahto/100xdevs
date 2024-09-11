/**
 * Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
 */

const express = require("express");
const app = express();

function loggerMiddleware(req, res, next) {
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${url}`);
  next();
}

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("hi there");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
