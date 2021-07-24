export default function alphabetSubsequence(s: string): boolean {
  if (new Set(s).size !== s.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) < s.charCodeAt(i + 1)) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
