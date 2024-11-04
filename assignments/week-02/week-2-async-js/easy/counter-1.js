let counter = 0;

function startCounter() {
  setInterval(() => {
    counter++;
    console.log(counter);
  }, 1000);
}

startCounter();
