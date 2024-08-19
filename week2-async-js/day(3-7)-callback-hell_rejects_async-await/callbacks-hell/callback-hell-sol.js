function cb3() {
  console.log("hi there!");
}
function cb1() {
  console.log("hello");
  setTimeout(cb3, 5000);
}
function cb() {
  console.log("hi");
  setTimeout(cb1, 3000);
}
setTimeout(cb, 1000);
