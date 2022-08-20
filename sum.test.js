const {stringLength, reverseString, Calculator} = require('./sum.js');

test('counts string', () => {
	expect(stringLength('Hi World')).toBe(8);
});

test('long string', () => {
	expect(stringLength('Hello World!')).toBe('long string');
});

test('empty string', () => {
	expect(stringLength('')).toBe('empty string');
});

test('reverse string', () => {
	expect(reverseString('world')).toBe('dlrow');
});

describe('Calculator ', () => {
	const calculator = new Calculator();
	describe('add num', () => {
		test('test', () => expect(calculator.add(7, 2)).toEqual(9));
	});
    
});