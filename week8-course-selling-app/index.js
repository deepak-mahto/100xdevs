const express = require("express");
const app = express();
const port = 3000;

app.post("/user/signup", () => {
  res.json({
    message: "Sign up endpoint.",
  });
});

app.post("/user/signin", () => {
  res.json({
    message: "Sign in endpoint.",
  });
});

app.post("/course/purchase", () => {
  res.json({
    message: "Purchase endpoint.",
  });
});

app.post("/user/purchases", () => {
  res.json({
    message: "Purchases endpoint.",
  });
});

app.post("/courses", () => {
  res.json({
    message: "Courses endpoint.",
  });
});

app.listen(port, () => {
  console.log(`App listening at port ${3000}`);
});
