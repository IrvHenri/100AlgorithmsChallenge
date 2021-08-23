import { differentSymbolsNaive } from "./differentSymbolsNaive";

describe(differentSymbolsNaive.name, () => {
  it("Test 1", () => {
    // arrange
    const s = "cabca";

    // act
    const response = differentSymbolsNaive(s);

    // assert
    expect(response).toBe(3);
  });
});
