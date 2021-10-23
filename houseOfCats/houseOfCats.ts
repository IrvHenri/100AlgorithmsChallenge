export function houseOfCats(legs: number): number[] {
  let result = [];
  for (let i = 2; i <= legs; i += 2) {
    if (legs % i === 0) {
      result.push(i / 2);
    }
  }
  return result;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
