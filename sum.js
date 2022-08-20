const stringLength = (string) => {

if (string.length === 0) {
return 'empty string';
} else if (string.length > 10) {
return 'long string';
}
return string.length;
};

const reverseString = (string) => string.split('').reverse().join('');

module.exports = {stringLength, reverseString};
