export function houseNumbersSum(inputArray: number[]): number {
  let sum = 0;
  let i = 0;

  while (i < inputArray.length) {
    if (inputArray[i] === 0) {
      break;
    }
    console.log(inputArray[i]);
    sum += inputArray[i];
    i++;
  }

  return sum;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
