const stringLength = (string) => {

if (string.length === 0) {
return 'empty string';
} else if (string.length > 10) {
return 'long string';
}
return string.length;
};

const reverseString = (string) => string.split('').reverse().join('');


class Calculator {
	add(x, y) {
		return x + y;
	}
	sub(x, y) {
		return x - y;
	}
	mult(x, y) {
		return x * y;
	}
	div(x, y) {
		return x / y;
	}
}

const calculator = new Calculator();

module.exports = {stringLength, reverseString, Calculator};
