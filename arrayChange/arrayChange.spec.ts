import { arrayChange } from "./arrayChange";
describe(arrayChange.name, () => {
  it("Test 1", () => {
    // arrange
    const data = [1, 1, 1];

    // act
    const response = arrayChange(data);

    // assert
    expect(response).toBe(3);
  });
});
