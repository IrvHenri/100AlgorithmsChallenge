export function findEmailDomain(address: string): string {
  let indexofAt = address.lastIndexOf("@") + 1;
  return address.slice(indexofAt);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
