export function alternatingSums(a: number[]): number[] {
  let teamOne = a
    .filter((member, i) => i % 2 === 0)
    .reduce((acc, val) => acc + val, 0);
  let teamTwo = a
    .filter((member, i) => i % 2 !== 0)
    .reduce((acc, val) => acc + val, 0);
  return [teamOne, teamTwo];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
