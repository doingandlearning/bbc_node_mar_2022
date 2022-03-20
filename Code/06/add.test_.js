import add from "./addesm.js";

test("Throw when inputs are not number", () => {
  expect(() => add("5", "5")).toThrowError(Error("inputs must be numbers"));
});

test("Expected results for valid values", () => {
  expect(add(5, 5)).toStrictEqual(10);
});
