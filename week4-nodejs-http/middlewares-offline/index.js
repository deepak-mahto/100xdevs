const express = require("express");
const app = express();

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

app.get("/ride2", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.status(200).send({
      msg: "Successfully riden the ride 2",
    });
  } else {
    res.status(411).send({
      msg: "Sorry you are not of the age to ride",
    });
  }
});

app.get("/ride1", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.status(200).send({
      msg: "Successfully riden the ride 1",
    });
  } else {
    res.status(411).send({
      msg: "Sorry you are not of the age to ride",
    });
  }
});

app.listen(3000);
