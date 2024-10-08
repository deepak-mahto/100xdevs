const { Router } = require("express");
const courseRouter = Router();
const { courseModel, userModel } = require("../db");
const { userMiddleware } = require("../middleware/user");

courseRouter.get("/purchase", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;

  const courses = await userModel.find({
    userId,
    courseId,
  });

  res.json({
    message: "You have successfully bought the course",
  });
});

courseRouter.get("/preview", async (req, res) => {
  const courses = await userModel.find({});
  res.json({
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
