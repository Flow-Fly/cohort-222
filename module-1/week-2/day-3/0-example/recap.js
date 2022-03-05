/**
 * Falsy values !
 */

// 0
// null
// undefined
// -0
// NaN
// ""
// false

const arr = [];

if (arr.length) {
	console.log("I am in the case the value is truthy");
} else {
	console.log("I am in the case the value is Falsy");
}

/**
 * Calculating the sum of a and b
 * @param {Number} a is the first number
 * @param {Number} b is the second number
 * @returns {Number}
 */
function sum(a, b) {
	return a + b;
}
