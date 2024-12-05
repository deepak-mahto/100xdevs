import "dotenv/config";
import express from "express";
import { Client } from "pg";

const app = express();

const pgClient = new Client(process.env.DB_CONN_STRING);
pgClient.connect();

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const response = await pgClient.query(
    `INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password})`
  );
  res.json({
    message: "Sign up successfull",
  });
});
