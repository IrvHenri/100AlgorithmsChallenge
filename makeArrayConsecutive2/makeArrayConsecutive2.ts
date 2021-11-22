export function makeArrayConsecutive2(statues: number[]): number {
  console.log(statues);
  let sorted = statues.sort((a, b) => a - b);
  let statuesNeeded = 0;
  console.log(sorted);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] - sorted[i] !== 1) {
      statuesNeeded += 1;
    }
  }
  return statuesNeeded;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
