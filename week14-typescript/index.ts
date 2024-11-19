const isLegal = (a: number) => {
  return a > 18 ? "legal" : "not legal";
};

const result = isLegal(17);
console.log(result);
