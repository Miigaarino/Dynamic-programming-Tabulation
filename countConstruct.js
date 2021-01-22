const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }
  return table[target.length];
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "ska", "sk", "boar"])
);
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
