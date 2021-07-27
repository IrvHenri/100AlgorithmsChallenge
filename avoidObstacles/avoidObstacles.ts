export function avoidObstacles(inputArray: number[]): number {
  let sortedArr = inputArray.sort((a, b) => a - b);
  let largestVal = sortedArr[sortedArr.length - 1];

  for (let i = 1; i <= sortedArr.length - 1; i++) {
    if (sortedArr.every((elem) => elem % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
