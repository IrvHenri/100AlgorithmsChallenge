export function containsCloseNums(nums: number[], k: number): boolean {
  let uniqueNumbers = [];
  let duplicateIndex;
  let duplicateNumber;
  for (let i = 0; i < nums.length; i++) {
    if (!uniqueNumbers.includes(nums[i])) {
      uniqueNumbers.push(nums[i]);
    } else {
      duplicateNumber = nums[i];
      duplicateIndex = i;
    }
  }
  let firstOccuranceIndex = nums.indexOf(duplicateNumber);
  let result = Math.abs(duplicateIndex - firstOccuranceIndex);
  if (result <= k) {
    return true;
  }

  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
