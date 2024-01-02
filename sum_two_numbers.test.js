const sumTwoNumbers = require("./sum_two_numbers.js");

test("add 3 and 4", () => {
    expect(sumTwoNumbers(3, 4)).toBe(7);
});

test("add -3 and 4", () => {
    expect(sumTwoNumbers(-3, 4)).toBe(1);
});