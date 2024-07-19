class StringCalculatorTDD {
	add(numbers) {
		if (numbers === "") {
			return 0;
		}

		let delimiter = /,|\n/;

		if (numbers.startsWith("//")) {
			const delimiterLastIndex = numbers.indexOf("\n");
			const delimiterPart = numbers.substring(2, delimiterLastIndex);
			delimiter = new RegExp(ecscapeRegExpression(delimiterPart), "g");
			numbers = numbers.substring(delimiterLastIndex + 1);
		}

		const numberArray = numbers.split(delimiter);
		return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
	}
}

function ecscapeRegExpression(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = StringCalculatorTDD;
