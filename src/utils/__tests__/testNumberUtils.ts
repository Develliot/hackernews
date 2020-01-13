import { limitNumberWithinRange } from '../NumberUtils';

describe('limitNumberWithinRange', () => {
    it('limits the number correctly correctly', () => {
        // expect(limitNumberWithinRange(5, 1, 10)).toEqual(5);
        // expect(limitNumberWithinRange(-5, 1, 10)).toEqual(1);
        // expect(limitNumberWithinRange(50, 1, 10)).toEqual(10);
        expect(() => {
            limitNumberWithinRange(50, 10, 1);
        }).toThrow('min must be smaller than max');
    });
});
