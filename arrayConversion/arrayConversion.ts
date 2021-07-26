export function arrayConversion(inputArray: number[]): number {
  let isOdd = true;

  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);

    isOdd = !isOdd;
  }
  return inputArray[0];
}

const sumProduct = (arr, isOdd) => {
  let sumProduct = [];
  if (isOdd) {
    for (let i = 0; i < arr.length; i += 2) {
      sumProduct.push(arr[i] + arr[i + 1]);
    }
  } else {
    for (let i = 0; i < arr.length; i += 2) {
      sumProduct.push(arr[i] * arr[i + 1]);
    }
  }
  return sumProduct;
};
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
