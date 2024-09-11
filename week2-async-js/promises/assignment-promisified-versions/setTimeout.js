function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
setTimeoutPromisified(3000).then(() => console.log("promise secceeded"));
