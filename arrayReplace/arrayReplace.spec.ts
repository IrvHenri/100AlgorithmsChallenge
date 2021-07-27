import { arrayReplace } from "./arrayReplace";

describe(arrayReplace.name, () => {
  it("Test 1", () => {
    // arrange
    const data = [1, 2, 1];
    const elementToReplace = 1;
    const substitutionElement = 3;

    // act
    const response = arrayReplace(data, elementToReplace, substitutionElement);

    // assert
    expect(response).toEqual([3, 2, 3]);
  });
});
