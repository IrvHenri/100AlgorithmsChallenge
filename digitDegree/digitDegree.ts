export function digitDegree(n: number): number {
  if (n <= 9) {
    return 0;
  }

  let count = 0;
  let currentNumber = n;
  while (true) {
    count++;
    currentNumber = reducerFunc(currentNumber);

    if (currentNumber <= 9) {
      break;
    }
  }
  return count;
}

const reducerFunc = (num) => {
  let result = num
    .toString()
    .split("")
    .map((num) => parseInt(num));
  return result.reduce((acc, val) => acc + val, 0);
};

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
