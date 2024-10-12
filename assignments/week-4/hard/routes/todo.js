const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const userRouter = Router();

// todo Routes

userRouter.put("/", userMiddleware, (req, res) => {
  // Implement update todo  logic
});

userRouter.delete("/", userMiddleware, (req, res) => {
  // Implement delete todo logic
});

userRouter.delete("/:id", userMiddleware, (req, res) => {
  // Implement delete todo by id logic
});

userRouter.get("/", userMiddleware, (req, res) => {
  // Implement fetching all todo logic
});

userRouter.get("/:id", userMiddleware, (req, res) => {
  // Implement fetching todo by id logic
});

module.exports = userRouter;
