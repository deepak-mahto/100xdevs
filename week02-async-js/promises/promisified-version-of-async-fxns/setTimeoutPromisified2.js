function waitFor3Sec(resolve, ms) {
  setTimeout(resolve, ms);
}

function setTimeoutPromisified() {
  return new Promise(waitFor3Sec);
}

const p = setTimeoutPromisified(3000);

function callback() {
  console.log("Promise Succeeded, 3 sec have passed");
}
p.then(callback);
