const maxValue = (arr: number[]) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const max = maxValue([23, 34, 22, 2, 4, 45]);
console.log(max);
