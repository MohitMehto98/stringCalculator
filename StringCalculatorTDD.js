class StringCalculatorTDD {
	add(numbers) {
		if (numbers === "") {
			return 0;
		}

		let delimiter = /,|\n/;

		if (numbers.startsWith("//")) {
			const delimiterLastIndex = numbers.indexOf("\n");
			const delimiterPart = numbers.substring(2, delimiterLastIndex);

			if (delimiterPart.startsWith("[")) {
				const delimiters = delimiterPart
					.match(/\[([^\]]+)\]/g)
					.map((d) => d.slice(1, -1));
				const escapedDelimiters = delimiters.map((d) => ecscapeRegExpression(d));
				delimiter = new RegExp(escapedDelimiters.join("|"), "g");
			} else {
				delimiter = new RegExp(ecscapeRegExpression(delimiterPart), "g");
			}
			numbers = numbers.substring(delimiterLastIndex + 1);
		}

		const numberArray = numbers.split(delimiter);
		const negatives = [];
		const sum = numberArray.reduce((total, num) => {
			const number = parseInt(num, 10);
			if (number < 0) {
				negatives.push(number);
			} else if (number <= 1000) {
				return total + number;
			}
			return total;
		}, 0);
		if (negatives.length > 0) {
			throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
		}

		return sum;
	}
}

function ecscapeRegExpression(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = StringCalculatorTDD;
