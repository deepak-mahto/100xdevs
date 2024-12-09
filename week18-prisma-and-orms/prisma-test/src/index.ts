import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();

const client = new PrismaClient();

app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json({
    users: users,
  });
});

app.get("/todos/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await client.user.findFirst({
    where: {
      id: +userId,
    },
    include: {
      todos: true,
    },
  });
  res.json({
    user: user,
  });
});

async function createUser() {
  await client.user.create({
    data: {
      username: "deepak",
      password: "123123",
      age: 23,
      city: "new delhi",
    },
  });
}

async function getUserDetails() {
  const user = await client.user.findFirst({
    where: {
      id: 1,
    },
    include: {
      todos: true,
    },
  });
  console.log(user);
}
getUserDetails();

async function deleteUserDetails() {
  const user = await client.user.delete({
    where: {
      id: 1,
    },
  });
}

async function updateUserDetails() {
  const user = await client.user.update({
    where: {
      id: 1,
    },
    data: {
      username: "ram",
    },
  });
}

app.listen(3000);
