const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const filePath = "./todos.json";

function readTodosFromFile() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    // If file doesn't exist or is empty, return an empty object
    return {};
  }
}

// write todos to the file
function writeTodosToFile(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

// get todos for a specific user
function getUserTodos(data, userId) {
  return data[userId] || [];
}

// save todos for a specific user
function saveUserTodos(data, userId, todos) {
  data[userId] = todos;
  writeTodosToFile(data);
}

app.post("/todos", function (req, res) {
  const userId = req.body.userId;
  if (!userId) {
    return res.status(400).send({ message: "User ID is required" });
  }

  const data = readTodosFromFile();
  const todos = getUserTodos(data, userId);

  const id = Date.now().toString();
  const title = req.body.title;

  if (!title) {
    return res.status(400).send({ message: "Title is required" });
  }

  todos.push({ id, title });
  saveUserTodos(data, userId, todos);

  res.status(201).send({ id, title });
});

app.delete("/todos", function (req, res) {
  const userId = req.body.userId;
  if (!userId) {
    return res.status(400).send({ message: "User ID is required" });
  }

  const data = readTodosFromFile();
  let todos = getUserTodos(data, userId);

  const id = req.body.id;
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
    saveUserTodos(data, userId, todos);
    res.status(200).send({ message: "Todo deleted successfully" });
  } else {
    res.status(404).send({ message: "Todo not found" });
  }
});

app.get("/todos", function (req, res) {
  const userId = req.body.userId;
  if (!userId) {
    return res.status(400).send({ message: "User ID is required" });
  }

  const data = readTodosFromFile();
  const todos = getUserTodos(data, userId);

  res.json({ todos });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
