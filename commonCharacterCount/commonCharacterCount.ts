import { isJsxFragment } from "typescript";

export function commonCharacterCount(s1: string, s2: string): number {
  let s1Array = [...s1];
  let s2Array = [...s2];
  let s1Obj = getCharCount(s1Array);
  let s2Obj = getCharCount(s2Array);

  let total = 0;
  for (let key in s1Obj) {
    if (s2Obj.hasOwnProperty(key)) {
      if (s2Obj[key] < s1Obj[key]) {
        total += s2Obj[key];
      } else {
        total += s1Obj[key];
      }
    }
  }
  return total;
}
function getCharCount(stringArr) {
  let resultObj = {};

  for (let i = 0; i < stringArr.length; i++) {
    if (resultObj.hasOwnProperty(stringArr[i])) {
      resultObj[stringArr[i]]++;
    } else {
      resultObj[stringArr[i]] = 1;
    }
  }
  return resultObj;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
