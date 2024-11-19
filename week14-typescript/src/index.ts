interface Address {
  city: string;
  country: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  address: Address;
}
interface Office {
  address: Address;
}

const obj: User = {
  name: "Deepak",
  age: 21,
  address: {
    city: "New Delhi",
    country: "India",
    pincode: 123123,
  },
};
