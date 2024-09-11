const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.status(200).json({
    answer: a + b,
  });
});

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
