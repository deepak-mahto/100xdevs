const bcrypt = require("bcrypt");
const express = require("express");
const { TodoModel, UserModel } = require("./db");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { auth, JWT_SECRET } = require("./auth");
const { z } = require("zod");

mongoose.connect("");
const app = express();

app.use(express.json());

app.post("/signup", async function (req, res) {
  // input validation using zod
  const requireBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min(5).max(50),
    name: z.string().min(3).max(50),
  });

  // parsedData = requireBody.parse(req.body);

  // safe parsing
  const parseDataSuccess = requireBody.safeParse(req.body);

  if (!parseDataSuccess.success) {
    res.json({
      message: "Incorrect format",
      error: parseDataSuccess.error,
    });
    return;
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  // input validation without zod library

  // if (typeof email !== String || email < 5 || !email.contains("@")) {
  //   res.json({
  //     message: "Email incorrect",
  //   });
  //   return;
  // }

  let errorThrown = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
  } catch (error) {
    res.json({
      message: "User already exists",
    });
    errorThrown = true;
  }
  if (!errorThrown) {
    res.json({
      message: "You are signed up",
    });
  }
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });

  if (!response) {
    res.status(403).json({
      message: "User is not found in the database",
    });
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        _id: passwordMatch._id,
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
