export function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  let ids = [];
  for (let change of changes) {
    if (change[0] > lastBackupTime) {
      if (!ids.includes(change[1])) {
        ids.push(change[1]);
      }
    }
  }
  return ids.sort((a, b) => a - b);
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1],
  ])
);
