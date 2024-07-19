const StringCalculatorTDD = require("./stringCalculatorTDD");

describe("StringCalculatorTDD", () => {
	let calculator;
	beforeEach(() => {
		calculator = new StringCalculatorTDD();
	});

	// this is the test case for empty string

	test("this test case should return 0 for an empty string", () => {
		expect(calculator.add("")).toBe(0);
	});

	//  this is the test case for single numner
	test("this test case should return the number for a single number", () => {
		expect(calculator.add("1")).toBe(1);
		expect(calculator.add("2")).toBe(2);
	});

	//  thisis the test case for two numbers
	test("should return the sum of two numbers", () => {
		expect(calculator.add("1,2")).toBe(3);
		expect(calculator.add("3,4")).toBe(7);
	});

	//  this is the test case for Unknown no. of Numbers
	test("should return the sum of an unknown number of numbers", () => {
		expect(calculator.add("1,2,3")).toBe(6);
		expect(calculator.add("4,5,6,7,8,9")).toBe(39);
	});

	// this is the test case for new line btw numbers

	test("should handle new lines between numbers", () => {
		expect(calculator.add("1\n2,3")).toBe(6);
		expect(calculator.add("4\n5\n6")).toBe(15);
	});

	// this is the test case for support custorm delimiters

	test("should handle custom delimiters", () => {
		expect(calculator.add("//;\n1;2")).toBe(3);
		expect(calculator.add("//|\n1|2|3")).toBe(6);
	});

	//  this is the test for check and throw error for negative numbers

	test("should throw an error for negative numbers", () => {
		expect(() => calculator.add("1,-2,3")).toThrow("Negatives not allowed: -2");
		expect(() => calculator.add("-1,2,-3")).toThrow(
			"Negatives not allowed: -1, -3"
		);
	});

	//  this is the test case for no. greater than 1000

	test("should ignore numbers greater than 1000", () => {
		expect(calculator.add("2,1001")).toBe(2);
		expect(calculator.add("1000,2000,3")).toBe(1003);
	});

	// this is the test case for multiple delimiters

	test("should handle multiple delimiters of any length", () => {
		expect(calculator.add("//[***]\n1***2***3")).toBe(6);
		expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
	});
});
