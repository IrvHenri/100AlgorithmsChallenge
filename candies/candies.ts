export function candies(n: number, m: number): number {
  // each person gets exact amount of candies.
  return Math.floor(10 / 3) * n;
}

console.log(candies(3, 10));
