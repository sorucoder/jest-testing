import average from './average'

test("average [1, 2, 3]", () => {
    expect(average([1, 2, 3])).toBe(2);
});