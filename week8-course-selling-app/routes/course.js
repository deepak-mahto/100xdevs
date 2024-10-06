const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", () => {
  res.json({
    message: "Purchase endpoint.",
  });
});

courseRouter.post("/preview", () => {
  res.json({
    message: "Purchases endpoint.",
  });
});

module.exports({
  courseRouter: courseRouter,
});
