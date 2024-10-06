const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", () => {
  res.json({
    message: "Sign up endpoint.",
  });
});

userRouter.post("/signin", () => {
  res.json({
    message: "Sign in endpoint.",
  });
});

module.exports({
  userRouter: userRouter,
});
