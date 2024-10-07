const { Router } = require("express");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const { userModel } = require("../db");

userRouter.post("/signup", async (req, res) => {
  // todo: adding zod validation
  const requireBody = z.Object({
    email: z.string().min(3).max(100),
    password: z.string().min(3).max(100),
    firstName: z.string().min(3).max(50),
    lastName: z.string().min(3).max(50),
  });

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
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  let errorThrown = false;
  try {
    // todo: hash the password so that plain text password will not get stored in the db
    const hashedPassword = await bcrypt.hash(password, 5);

    // todo: add try catch
    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (error) {
    res.json({
      message: "User already exist",
    });
    errorThrown = true;
  }

  if (!errorThrown) {
    res.json({
      message: "Sign up succeeded",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  // todo: ideally password should should be hashed, and hence you can't compare the user provided password and the database password
  const user = await userModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_USER_PASSWORD
    );

    // todo: do cookie logic

    res.json({
      token: token,
    });
  } else {
    res.json({
      message: "Incorrect credentials",
    });
  }
});

module.exports = {
  userRouter: userRouter,
};
