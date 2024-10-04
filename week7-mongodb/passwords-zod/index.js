const express = require("express");
const { TodoModel, UserModel } = require("./db");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { auth, JWT_SECRET } = require("./auth");

mongoose.connect("");
const app = express();

app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const hashedPassword = await bcrypt.hash(password, 5);

  await UserModel.create({
    email: email,
    password: hashedPassword,
    name: name,
  });

  res.json({
    message: "You are signed up.",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        _id: user._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const title = req.body.title;
  const done = req.body.done;
  const userId = req.userId;

  await TodoModel.create({
    title: title,
    done: done,
    userId: userId,
  });

  res.status(200).json({
    message: "Todo has added",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.status(200).json({
    todos,
  });
});

app.listen(3000);
