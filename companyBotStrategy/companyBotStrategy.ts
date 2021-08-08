export function companyBotStrategy(trainingData: number[][]): number {
  let filteredScores = trainingData.filter((item) => item[1] === 1);
  if (filteredScores.length) {
    let arrLength = filteredScores.length;
    let sum = filteredScores.reduce((acc, item) => acc + item[0], 0);
    return sum / arrLength;
  }
  return 0;
}

console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, -1],
    [0, 0],
    [5, -1],
  ])
);
