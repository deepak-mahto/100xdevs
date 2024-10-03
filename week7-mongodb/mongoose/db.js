const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
  email: { type: String, unique: true },
  password: String,
  name: String,
});

const Todo = new Schema({
  title: String,
  done: Boolean,
  userId: ObjectId,
});

const UserModel = mongoose.Schema("user", User);
const TodoModel = mongoose.Schema("todos", Todo);

module.exports = {
  UserModel: UserModel,
  TodoModel: TodoModel,
};
