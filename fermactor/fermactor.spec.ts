import { fermactor } from "./fermactor";

describe(fermactor.name, () => {
  it("Test 1", () => {
    // arrange
    const n = 15;

    // act
    const response = fermactor(n);

    // assert
    expect(response).toEqual([4, 1]);
  });
});
