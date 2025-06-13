import { describe, test, mock } from "node:test";
import { processOrder } from "./app.js";
import assert from "node:assert";

describe("Order feature", () => {
  test("Process order working fine", () => {
    //Arrange - setup
    //spy on method
    const mockedProcessPayment = mock.fn((amount) => {
      console.log("Mocked Process Payment");
      //Don't call api or make any side effect in mock function
      return { id: 1, amount: amount };
    });

    const expected = { id: 1, amount: 100 };

    // Act
    const result = processOrder(
      { amount: 100 },
      { processPayment: mockedProcessPayment }
    );

    // Assert
    assert.deepStrictEqual(result, expected);
    assert.strictEqual(mockedProcessPayment.mock.callCount(), 1);

    const call = mockedProcessPayment.mock.calls[0];
    assert.deepStrictEqual(call.arguments, [100]);
  });
});
