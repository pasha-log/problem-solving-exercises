// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
// Constraints

// Time Complexity - O(N + M)

function createFrequencyCounter(str) {
	let frequencies = new Map();

	for (let val of str) {
		let valCount = frequencies.get(val) || 0;
		frequencies.set(val, valCount + 1);
	}
	return frequencies;
}

function sameFrequency(num1, num2) {
	num1 = `${num1}`;
	num2 = `${num2}`;
	num1Freq = createFrequencyCounter(num1);
	num2Freq = createFrequencyCounter(num2);
	if (num1Freq.size !== num2Freq.size) return false;
	for (let num of num1Freq.keys()) {
		if (num2Freq.get(num) !== num1Freq.get(num)) return false;
	}
	return true;
}

module.exports = { sameFrequency };
