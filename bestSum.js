const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  return table[targetSum];
};

console.log(howSum(8, [2, 3, 5]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(8, [1, 4, 5]));
console.log(howSum(100, [1, 2, 5, 25]));
