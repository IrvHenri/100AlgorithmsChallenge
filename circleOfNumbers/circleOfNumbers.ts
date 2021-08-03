export function circleOfNumbers(n: number, firstNumber: number): number {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  let halfOfN = arr.length / 2;

  if (firstNumber > halfOfN) {
    return firstNumber - halfOfN;
  }

  return firstNumber + halfOfN;
}

console.log(circleOfNumbers(10, 2));
