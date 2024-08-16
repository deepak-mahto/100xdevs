setInterval(function () {
  let currentTimeObject = new Date();
  if (currentTimeObject.getSeconds() < 10) {
    console.log(
      `${currentTimeObject.getHours()}:${currentTimeObject.getMinutes()}:0${currentTimeObject.getSeconds()}`
    );
  } else {
    console.log(
      `${currentTimeObject.getHours()}:${currentTimeObject.getMinutes()}:${currentTimeObject.getSeconds()}`
    );
  }
  console.log(`${currentTimeObject.toLocaleTimeString()}\n`);
}, 1000);
