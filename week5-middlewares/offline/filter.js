const arr = [1, 2, 3, 4, 5, 67, 7, 7, 8];

const filteredArr = arr.filter((n) => {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(filteredArr);
