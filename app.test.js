import { greet, sum } from "./app.js";
import assert from "node:assert";
import { test, suite } from "node:test";

// Tests are written in this format
// AAA
// A - Arrange
// A - Act
// A - Assert

suite("Greet function", () => {
  test("greet function returns the correct greet message", () => {
    //Arrange
    const expected = "Hello, Saurabh";

    // Act
    const result = greet("Saurabh");

    //Assert
    assert.strictEqual(expected, result);
  });

  test("Sum of 2 and 3 is 5", () => {
    const expectedResult = 5;
    const result = sum(2, 3);
    assert.strictEqual(result, expectedResult);
  });
});
