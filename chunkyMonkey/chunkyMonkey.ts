export function chunkyMonkey(arr: any[], size: number): any[][] {
  let leftSlice = arr.slice(0, size);
  let rightSlice = arr.slice(size);
  return [leftSlice, rightSlice];
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
