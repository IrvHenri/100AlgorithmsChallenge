export function isCaseInsensitivePalindrome(inputString: string): boolean {
  let originalToLower = inputString.toLowerCase();
  let reversedString = [...originalToLower].reverse().join("");

  return originalToLower === reversedString;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
