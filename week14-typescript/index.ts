const delayedCall = (fn: () => void) => {
  setTimeout(fn, 1000);
};

console.log(
  delayedCall(() => {
    console.log("hi there");
  })
);
