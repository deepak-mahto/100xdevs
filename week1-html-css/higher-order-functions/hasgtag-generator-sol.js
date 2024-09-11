function generateHashtag(str) {
  const hashtag = str.split(" ").reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, "#");

  return hashtag.length === 1 || hashtag > 140 ? false : hashtag;
}

const result = generateHashtag("Hello World");
console.log(result);
