function identity<T>(arg: T) {
  return arg;
}

const output1 = identity<string>("deepak");
const output2 = identity<number>(123);
