const { Router } = require("express");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const { userModel } = require("../db");

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body; // todo: adding zod validation
  // todo: hash the password so that plain text password will not get stored in the db

  // todo: add try catch
  await userModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  res.json({
    message: "Sign up succeeded",
  });
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
