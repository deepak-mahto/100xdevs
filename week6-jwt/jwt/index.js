const express = require("express");
const jwt = require("jsonwebtoken");
const JWTSECRET = "userapp";
const app = express();

app.use(express.json());

const users = [];

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((user) => user.username === username)) {
    res.send({
      message: "You are already signedup.",
    });
    return;
  }

  users.push({
    username: username,
    password: password,
  });
  res.send({
    message: "Account has been created",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  foundUser = user;

  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWTSECRET
    ); // convert their username over to a jwt

    // foundUser.token = token;
    res.send({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

app.get("/me", function (req, res) {
  const token = req.headers.authorization; //jwt
  const decodedInformation = jwt.verify(token, JWTSECRET); // {username: deepakkumar}
  const username = decodedInformation.username;

  const user = users.find((user) => user.username === username);

  if (user) {
    res.send({
      username: user.username,
      password: user.password,
    });
  } else {
    res.send({
      message: "Unauthorized",
    });
  }
});

app.listen(3000);
