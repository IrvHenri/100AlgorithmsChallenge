export function factorializeANumber(num: number): number {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
