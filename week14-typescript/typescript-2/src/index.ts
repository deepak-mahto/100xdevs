interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type userProfile = Pick<User, "name" | "email" | "password">;

type updatePropOptional = Partial<userProfile>;

const displayUserProfile = (user: updatePropOptional) => {
  console.log(`Name: ${user.name} Email: ${user.email}`);
};
