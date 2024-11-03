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

function auth(req, res, next) {
  const token = req.headers.authorization;
  const decodedInformation = jwt.verify(token, JWTSECRET);

  if (decodedInformation.username) {
    req.username = decodedInformation.username;
    next();
  } else {
    res.send({
      message: "You are not signed in.",
    });
  }
}

app.get("/me", auth, function (req, res) {
  const user = users.find((user) => user.username === req.username);

  if (user) {
    res.send({
      username: user.username,
      password: user.password,
    });
  }
});

app.listen(3000);
