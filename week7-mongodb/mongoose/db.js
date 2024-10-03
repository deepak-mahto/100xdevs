const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userId = mongoose.userId;

const User = new Schema({
  email: String,
  password: String,
  name: String,
});

const Todos = new Schema({
  title: String,
  done: Boolean,
  userId: userId,
});
