function validatePassword(password) {
  const isLengthValid = password.length >= 8;

  const hasUppercase = password
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasLowerCase = password
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigit = password
    .split("")
    .some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUppercase && hasLowerCase && hasDigit;
}

const result = validatePassword("Abc12345");
console.log(result);
