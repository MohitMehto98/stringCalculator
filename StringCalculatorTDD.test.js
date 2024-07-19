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
    
    //  this is the test case for Unknown Number of Numbers
    test("should return the sum of an unknown number of numbers", () => {
        expect(calculator.add("1,2,3")).toBe(6);
        expect(calculator.add("4,5,6,7,8,9")).toBe(39);
      });
});

  