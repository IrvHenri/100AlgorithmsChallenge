import { adjacentElementsProduct } from './adjacentElementsProduct';

describe(adjacentElementsProduct.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [3, 6, -2, -5, 7, 3];

        // act
        const response = adjacentElementsProduct(data);

        // assert
        expect(response).toBe(21);
    });
});
