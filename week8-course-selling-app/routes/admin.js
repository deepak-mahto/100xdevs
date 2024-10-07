const { Router } = require("express");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const { adminModel } = require("../db");

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body; // todo: adding zod validation
  // todo: hash the password so that plain text password will not get stored in the db

  // todo: add try catch
  await adminModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  res.json({
    message: "Sign up succeeded",
  });
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  // todo: ideally password should should be hashed, and hence you can't compare the user provided password and the database password
  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_ADMIN_PASSWORD
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

adminRouter.post("/course", (req, res) => {
  res.json("Course update endpoint");
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
