const stringLength = require('./sum.js');

test('counts string', () => {
	expect(stringLength('Hello World')).toBe(11);
});