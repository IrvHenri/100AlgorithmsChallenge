export function confirmEnding(str: string, target: string) {
  let strArr = [...str];
  let targetLength = target.length;
  let result = str.substring(str.length - targetLength);
  if (result === target) {
    return true;
  }

  return false;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
