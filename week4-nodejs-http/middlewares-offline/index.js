const express = require("express");
const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(411).send({ msg: "Sorry you are not of the age yet" });
  }
}

// use middleware at the top of route handlers
app.use(isOldEnoughMiddleware);

app.get("/ride2", function (req, res) {
  res.status(200).send({
    msg: "Successfully riden the ride 2",
  });
});

app.get("/ride1", function (req, res) {
  res.status(200).send({
    msg: "Successfully riden the ride 1",
  });
});

app.listen(3000);
