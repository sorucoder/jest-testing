import reverse from "./reverse";

test("reverse [1, 2, 3]", () => {
    expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
});