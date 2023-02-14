// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function createFrequencyCounter(str) {
	let frequencies = new Map();

	for (let val of str) {
		let valCount = frequencies.get(val) || 0;
		frequencies.set(val, valCount + 1);
	}
	return frequencies;
}

function constructNote(str1, str2) {
	if (str1.length > str2.length) return false;
	let charMap1 = createFrequencyCounter(str1);
	let charMap2 = createFrequencyCounter(str2);
	for (let letter of charMap1.keys()) {
		if (!charMap2.has(letter)) return false;
		if (charMap2.get(letter) < charMap1.get(letter)) return false;
	}
	return true;
}

module.exports = { constructNote };
