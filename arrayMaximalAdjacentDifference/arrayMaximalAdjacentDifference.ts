export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDifference = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 0; i < inputArray.length; i++) {
    if (Math.abs(inputArray[i] - inputArray[i + 1]) > maxDifference) {
      maxDifference = Math.abs(inputArray[i] - inputArray[i + 1]);
    }
  }

  return maxDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
