// real life example

const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kedneys: [
      {
        ishealthy: false,
      },
      {
        ishealthy: true,
      },
    ],
  },
];

// create 4 routes (4 things that the hospital can do)

// GET - User can check how many kidneys they have and their health
app.get("/", function (req, res) {});

// POST - User can add a new kidney
app.post("/", function (req, res) {});

// PUT - User can replace a kedney, make it healthy
app.post("/", function (req, res) {});

// DELETE - User can remove a kidney
app.post("/", function (req, res) {});

app.listen(3000);
