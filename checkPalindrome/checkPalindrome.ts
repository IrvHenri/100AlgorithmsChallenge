export function checkPalindrome(inputString: string): boolean {
  let reversedString = [...inputString].reverse().join("");

  if (reversedString === inputString) {
    return true;
  }
  return false;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
