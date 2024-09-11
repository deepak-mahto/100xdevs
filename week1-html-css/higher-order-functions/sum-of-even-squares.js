function sumOfEvenSquares(numbers) {
  const evenSquares = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((total, num) => total + num, 0);
  return evenSquares;
}

console.log(sumOfEvenSquares([1, 2, 3, 4, 5, 6, 7]));
