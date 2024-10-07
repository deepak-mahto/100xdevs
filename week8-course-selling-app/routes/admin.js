const { Router } = require("express");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const { adminModel } = require("../db");
const bcrypt = require("bcrypt");
const { JWT_ADMIN_PASSWORD } = require("../config");

adminRouter.post("/signup", async (req, res) => {
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
    await adminModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (error) {
    res.json({
      message: "Admin already exist",
    });
    errorThrown = true;
  }
  if (!errorThrown) {
    res.json({
      message: "Sign up succeeded",
    });
  }
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
      JWT_ADMIN_PASSWORD
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

adminRouter.post("/course", (req, res) => {});

adminRouter.put("/course", (req, res) => {
  res.json("Course update endpoint");
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json("Show courses in bulk endpoint");
});

module.exports = {
  adminRouter: adminRouter,
};
