const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// Define schemas

const userSchema = new Schema({
  // Schema definition here
  email: { type: String, unique: true },
  password: String,
  fistName: String,
  lastName: String,
});

const todoSchema = new Schema({
  // Schema definition here
  title: String,
  description: String,
  userId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const todoModel = mongoose.model("todo", todoSchema);

module.exports = {
  userModel: userModel,
  todoModel: todoModel,
};
