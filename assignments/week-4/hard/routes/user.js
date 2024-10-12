const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = Router();
const { z } = require("zod");
const userMiddleware = require("../middleware/user");
const { userModel } = require("../database");
const { JWT_USER_SECRET } = require("../config");

// User Routes
userRouter.post("/signup", async (req, res) => {
  //Implementing ZOD
  const requireBody = z.object({
    email: z.string().min(6).max(100),
    password: z.string().min(6).max(100),
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

  // Implement user signup logic
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  let errorThrown = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
      email: email,
      password: hashedPassword,
      fistName: firstName,
      lastName: lastName,
    });
  } catch (error) {
    res.status(401).json({
      message: "User already exists",
      error: error.message,
    });
    errorThrown = true;
  }
  if (!errorThrown) {
    res.status(200).json({
      message: "Your are Signed up ",
    });
  }
});

userRouter.post("/login", async (req, res) => {
  // Implement user login logic
  const email = req.body.email;
  const password = req.body.password;

  const user = await userModel.findOne({
    email: email,
  });

  const matchedPassword = await bcrypt.compare(password, user.password);

  if (matchedPassword) {
    const token = jwt.sign(
      {
        id: matchedPassword._id,
      },
      JWT_USER_SECRET
    );

    res.status(200).json({
      message: "You are logged in ",
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Invalid credentials",
    });
  }
});

userRouter.get("/todos", userMiddleware, (req, res) => {
  // Implement logic for getting todos for a user
});

userRouter.post("/logout", userMiddleware, (req, res) => {
  // Implement logout logic
});

module.exports = {
  userRouter,
};
