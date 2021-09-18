export function fermactor(n: number): number[] {
  console.log(n);
  for (let i = 1; i < n; i++) {
    console.log(i);
    for (let j = 1; j < i; j++) {
      let total = i ** 2 - j ** 2;

      if (total === n) {
        return [i, j];
      }
    }
  }
}

console.log(fermactor(15));
