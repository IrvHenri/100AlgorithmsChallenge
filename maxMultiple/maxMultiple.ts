export function maxMultiple(divisor: number, bound: number): number {
  // go through numbers divisible by 3
  // if i is greater then 10 break
  let i = 1;
  let result = 0;
  while (i <= bound) {
    if (i % divisor === 0) {
      result = i;
    }
    i++;
  }

  return result;
}

console.log(maxMultiple(3, 10));
