export function findClosestPair(numbers: number[], sum: number): number {
  let closestPairs = [];
  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    for (let j = 0; j < numbers.length; j++) {
      let potentialPair = currentNumber + numbers[j];
      if (potentialPair === sum) {
        let distance = Math.abs(i - j);
        closestPairs.push(distance);
      }
    }
  }
  return closestPairs.length ? Math.min(...closestPairs) : -1;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
