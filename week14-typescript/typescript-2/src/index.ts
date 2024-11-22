type User = {
  name: string;
  age: number;
  email: string;
};

const users = new Map<string, User>();
users.set("asad12@23", { name: "deepak", age: 23, email: "abd123@gmail.com" });
users.set("aksfsn12@12", { name: "ram", age: 22, email: "jhg123@gmail.com" });

const user1 = users.get("asad12@23");
console.log(user1?.email);
