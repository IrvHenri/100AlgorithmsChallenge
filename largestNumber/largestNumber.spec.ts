import { largestNumber } from "./largestNumber";

describe(largestNumber.name, () => {
  it("Test 1", () => {
    // arrange
    const data = 2;

    // act
    const response = largestNumber(data);

    // assert
    expect(response).toBe(99);
  });
});
