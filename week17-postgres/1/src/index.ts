import "dotenv/config";
import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client(process.env.DB_CONN_STRING);
pgClient.connect();

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const pincode = req.body.pincode;

  try {
    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;

    const addressInsertQuery = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5);`;

    await pgClient.query("BEGIN;");

    const response = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]);

    const user_id = response.rows[0].id;

    await pgClient.query(addressInsertQuery, [
      user_id,
      city,
      country,
      street,
      pincode,
    ]);

    await pgClient.query("COMMIT;");

    res.json({
      message: "Sign up successfull",
    });
  } catch (error) {
    res.json({
      message: "Error while signing up" + " " + error,
    });
  }
});

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  const query1 = `SELECT id, username, email FROM users WHERE id = $1;`;
  const response1 = await pgClient.query(query1, [id]);

  const query2 = `SELECT * FROM addresses WHERE user_id = $1;`;
  const response2 = await pgClient.query(query2, [id]);

  res.json({
    userInfo: response1.rows[0],
    userAddresses: response2.rows,
  });
});

app.listen(3000);
