const express = require("express");
const { TodoModel, UserModel } = require("./db");

const app = express();

app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.insert({
    email: email,
    password: password,
    name: name,
  });

  res.json({
    message: "You are signed up.",
  });
});

app.post("/signin", function (req, res) {});

app.post("/todo", function (req, res) {});

app.get("/todos", function (req, res) {});

app.listen(3000);
