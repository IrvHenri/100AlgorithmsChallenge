export function flattenArray(arr: any[]): any[] {
  let result = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      result = result.concat(flattenArray(val));
    } else {
      result.push(val);
    }
  }
  return result;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
