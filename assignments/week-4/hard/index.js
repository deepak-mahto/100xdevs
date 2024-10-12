require("dotenv").config();
const express = require("express");
const { userRouter } = require("./routes/user");
const mongoose = require("mongoose");
const { MONGO_URL, PORT } = require("./config");

const app = express();
const port = PORT;

app.use(express.json());

//  start writing your routes here
app.use("/api/v1/user", userRouter);

async function main() {
  await mongoose.connect(MONGO_URL);
  app.listen(port, () =>
    console.log(`server is running at http://localhost:${port}`)
  );
}

main();
