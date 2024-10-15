const { add, subtract, multiply } = require('../math.js');

describe('Addition', () =>
{
    test('expect 5 + 3 to equal 8', () =>
    {
        expect(add(5, 3)).toBe(8);
    });

    test('expect 5 - 1 to equal 4', () =>
    {
        expect(subtract(5, 1)).toBe(4);
    });

    test('expect 2 * 3 to equal 6', () =>
    {
        expect(multiply(2, 3)).toBe(6);
    });
})