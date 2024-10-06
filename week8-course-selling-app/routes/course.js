const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/purchase", (req, res) => {
  res.json({
    message: "Purchase endpoint.",
  });
});

courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "Preview courses endpoint.",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
