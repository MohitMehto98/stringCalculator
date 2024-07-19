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
    
    //  this is the test case in which return number for single numner
    test("this test case should return the number for a single number", () => {
        expect(calculator.add("1")).toBe(1);
        expect(calculator.add("2")).toBe(2);
      });
});
