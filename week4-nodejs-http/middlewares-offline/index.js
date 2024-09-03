const express = require("express");
const app = express();
let requestCount = 0; // global varibale

// You have been given an express server which have a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of the requests made to the server in the global
// requestCount varibale.

// this function track the number of request have been sent to the server
app.use(function (req, res, next) {
  requestCount = requestCount + 1;
  next();
}); // global middleware

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount });
});

app.listen(3000);
