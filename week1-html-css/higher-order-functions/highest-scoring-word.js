function highestScoringWord(str) {
  const words = str.split(" ");

  // Map the array of words to an array of scores
  const scores = words.map((word) =>
    Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 97,
      0
    )
  );
  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);
  return words[highestIndex];
}

const result = highestScoringWord("Hello name is winston");
console.log(result);
