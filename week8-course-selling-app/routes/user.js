const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "Sign up endpoint.",
  });
});

userRouter.post("/signin", (req, res) => {
  res.json({
    message: "Sign in endpoint.",
  });
});

module.exports = {
  userRouter: userRouter,
};
