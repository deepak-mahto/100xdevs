// how to give the type to the function that is expected as an input
function after1Sec(fn: () => void) {
  setTimeout(fn, 1000);
}

after1Sec(function () {
  console.log("hi there");
});
