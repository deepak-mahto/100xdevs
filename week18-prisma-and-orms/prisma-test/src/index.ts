import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

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
  });
  console.log(user);
}

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
