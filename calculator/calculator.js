function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(a, b) {
	return Array.reduce((total, current) => total + current, 0);
}

function multiply(a, b) {
	return Array.length
		? Array.reduce((accumulator, nextItem) => accumulator * nextItem)
		: 0;
}

function power(a, b) {
	return Math.pow(a, b)
}

function factorial(n) {
	if (n == 0) return 1;
	let example = 1;
	for (let i = n; i > 0; i--) {
		example *= i;
	}
	return example
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}