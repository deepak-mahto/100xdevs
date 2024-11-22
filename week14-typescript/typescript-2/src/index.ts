type User = {
  id: string;
  username: string;
};

// type Users = {
//   [key: string]: User;
// };

type Users = Record<string, User>;

const users: Users = {
  "ras@qwe12": {
    id: "ras@qwe12",
    username: "deepak",
  },
  "asfwf@12": {
    id: "asfwf@12",
    username: "ram",
  },
};

console.log(users["ras@qwe12"].username);
