const users = new Map();
users.set("asad12@23", { name: "deepak", age: 23 });
users.set("aksfsn12@12", { name: "ram", age: 22 });

const user1 = users.get("asad12@23");
console.log(user1.name);
