export function largestNumber(n: number): number {
  let numTrack = "";
  for (let i = 0; i < n; i++) {
    numTrack += "9";
  }
  return parseInt(numTrack);
}

console.log(largestNumber(2));
