export function matrixElementsSum(matrix: any[][]): number {
  let badIndexes = [];
  let totalRooms = 0;
  // go through each item in each array
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].filter((item, index) => {
      if (item === 0) {
        badIndexes.push(index);
      } else if (badIndexes.indexOf(index) === -1) {
        totalRooms += matrix[i][index];
      }
    });
  }
  //if zero push that index in uninhabitable rooms array
  return totalRooms;
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
