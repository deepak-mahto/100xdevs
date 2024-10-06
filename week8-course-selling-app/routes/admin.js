const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post("/signup", (req, res) => {
  res.json("Signup endpoint");
});

adminRouter.post("/signin", (req, res) => {
  res.json("Signin endpoint");
});

adminRouter.put("/course", (req, res) => {
  res.json("Course update endpoint");
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json("Show courses in bulk endpoint");
});

module.exports = {
  adminRouter: adminRouter,
};
