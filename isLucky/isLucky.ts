export function isLucky(n: number): boolean {
  // make num an array
  let numToArray = n.toString().split("");
  // find middle index and divide array
  let arrayMiddleIndex = numToArray.length / 2;
  // compare sums of both arrays
  // return true/false
  let firstHalfSum = numToArray
    .slice(0, arrayMiddleIndex)
    .reduce((a, b) => a + parseInt(b, 10), 0);
  let secondHalfSum = numToArray
    .slice(arrayMiddleIndex)
    .reduce((a, b) => a + parseInt(b, 10), 0);
  return firstHalfSum === secondHalfSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
