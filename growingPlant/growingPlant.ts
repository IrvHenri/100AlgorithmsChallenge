export function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  let initialHeight = 0;
  let days = 0;
  let deltaGrowth = upSpeed - downSpeed;

  console.log(deltaGrowth);

  while (initialHeight <= desiredHeight) {
    initialHeight += upSpeed;

    days += 1;

    if (initialHeight < desiredHeight) {
    }
  }
  console.log(initialHeight);
  return days;
}

console.log(growingPlant(100, 10, 910));
