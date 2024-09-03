const express = require("express");
const app = express();

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(411).send({ msg: "Sorry you are not of the age yet" });
  }
}

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  res.status(200).send({
    msg: "Successfully riden the ride 2",
  });
});

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.status(200).send({
    msg: "Successfully riden the ride 1",
  });
});

app.listen(3000);
