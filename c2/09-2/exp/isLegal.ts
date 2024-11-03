// type inference
function isLegal(age: number) {
  return age >= 18 ? true : false;
}

const legalOrNot = isLegal(17);

if (legalOrNot) {
  console.log("Legal");
} else {
  console.log("Illegal");
}
