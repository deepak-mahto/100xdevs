let counter = 0;

function startCounter() {
  function increment() {
    counter++;
    console.log(counter);
    setTimeout(increment, 1000);
  }
  increment();
}

startCounter();
