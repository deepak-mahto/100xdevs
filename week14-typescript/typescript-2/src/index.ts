interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

type userProfile = Pick<User, "name" | "email">;

const displayUserProfile = (user: userProfile) => {
  console.log(`Name: ${user.name} Email: ${user.email}`);
};
