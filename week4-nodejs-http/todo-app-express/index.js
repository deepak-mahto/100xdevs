const express = require("express");
const app = express();

app.use(express.json());

let todos = [];

app.post("/", function (req, res) {
  // create a random id for the todo
  const id = Date.now().toString();

  // extract the todo title from the body
  const title = req.body.title;
  if (!title) {
    return res.status(400).send({ message: "Title is required" });
  }

  todos.push({
    id,
    title,
  });

  res.status(201).send({ id, title });
});

app.delete("/", function (req, res) {
  // extract the todo id
  const id = req.body.id;

  // remove the todo from here
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.status(200).send({ message: "Todo deleted successfully" });
  } else {
    res.status(404).send({ message: "Todo not found" });
  }
});

app.get("/", function (req, res) {
  res.json({
    todos,
  });
});

app.listen(3000);
