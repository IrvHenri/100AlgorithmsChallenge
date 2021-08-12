export function containsDuplicates(a: number[]): boolean {
  let sorted = a.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (a[i] === a[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
