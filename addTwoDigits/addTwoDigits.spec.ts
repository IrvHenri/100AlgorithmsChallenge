import { addTwoDigits } from './addTwoDigits';

describe(addTwoDigits.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 29;

        // act
        const response = addTwoDigits(data);

        // assert
        expect(response).toBe(11);
    });
});
