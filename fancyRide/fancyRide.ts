export function fancyRide(l: number, fares: number[]): string {
  const couponPrice = 20;
  let availableOptions = [];
  let carOptions = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
  for (let i = 0; i < fares.length; i++) {
    let farePrice = fares[i] * l;
    if (farePrice <= couponPrice) {
      availableOptions.push(i);
    }
  }
  let bestChoice = availableOptions[availableOptions.length - 1];

  return carOptions[bestChoice];
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
