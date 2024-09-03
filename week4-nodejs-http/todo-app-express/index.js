const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const filePath = "./todos.json";

// Helper function to read todos from the file
function readTodosFromFile() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    // If file doesn't exist or is empty, return an empty array
    return [];
  }
}

// Helper function to write todos to the file
function writeTodosToFile(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf8");
}

app.post("/", function (req, res) {
  const todos = readTodosFromFile();

  const id = Date.now().toString();
  const title = req.body.title;

  if (!title) {
    return res.status(400).send({ message: "Title is required" });
  }

  todos.push({ id, title });
  writeTodosToFile(todos);

  res.status(201).send({ id, title });
});

app.delete("/", function (req, res) {
  let todos = readTodosFromFile();

  const id = req.body.id;
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
    writeTodosToFile(todos);
    res.status(200).send({ message: "Todo deleted successfully" });
  } else {
    res.status(404).send({ message: "Todo not found" });
  }
});

app.get("/", function (req, res) {
  const todos = readTodosFromFile();
  res.json({ todos });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
