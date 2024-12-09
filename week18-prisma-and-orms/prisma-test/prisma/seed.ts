import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function dummyUser() {
  await client.user.create({
    data: {
      username: "david",
      age: 22,
      password: "1231",
      city: "jaipur",
      todos: {
        create: {
          description: "go to gym",
          title: "gym",
          done: false,
        },
      },
    },
  });
}
