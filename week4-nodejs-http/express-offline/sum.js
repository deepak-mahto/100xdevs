function calculateSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const sum = calculateSum(10);
console.log(sum);
