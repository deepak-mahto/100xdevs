type User = {
  name: string;
  age: number;
  address?: {
    city: string;
    country: string;
  };
};

const isLegal = (user: User): boolean => {
  return user.age > 18;
};

const user: User = {
  name: "deepak",
  age: 24,
  address: {
    city: "New Delhi",
    country: "India",
  },
};
const canVote = isLegal(user);

if (canVote) {
  console.log("can vote");
} else {
  console.log("can not vote");
}
