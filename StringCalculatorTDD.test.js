const StringCalculatorTDD = require("./stringCalculatorTDD");

describe("StringCalculatorTDD", () => {
	let calculator;
	beforeEach(() => {
		calculator = new StringCalculatorTDD();
	});

	// this is the test case one from the list of test cases

	test("this test case should return 0 for an empty string", () => {
		expect(calculator.add("")).toBe(0);
	});
});
