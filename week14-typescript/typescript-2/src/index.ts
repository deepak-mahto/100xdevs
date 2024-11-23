import express from "express";
import { z } from "zod";

const app = express();
const port = 3000;

const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name can not be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

type userProfileType = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: userProfileType = req.body;

  if (!success) {
    res.status(411).json({
      message: "Incorrect inputs",
    });
  }
  res.json({
    message: "Profile Updated",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
