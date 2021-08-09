import { containsCloseNums } from "./containsCloseNums";

describe(containsCloseNums.name, () => {
  it("Test 1", () => {
    // arrange
    const nums = [0, 1, 2, 3, 5, 2];
    const k = 3;

    // act
    const response = containsCloseNums(nums, k);

    // assert
    expect(response).toBe(true);
  });

  it("Test 2", () => {
    // arrange
    const nums = [0, 1, 2, 3, 5, 2];
    const k = 2;

    // act
    const response = containsCloseNums(nums, k);

    // assert
    expect(response).toBe(false);
  });
});
