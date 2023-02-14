// Write a function called isSubsequence which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Constraints:

// Time Complexity - O(N + M)

function isSubsequence(a, b) {
	aIdx = 0;
	bIdx = 0;

	while (aIdx <= a.length - 1) {
		if (b[bIdx] === undefined) return false;
		if (a[aIdx] !== b[bIdx]) {
			bIdx++;
		} else {
			aIdx++;
			bIdx++;
		}
	}
	return true;
}

module.exports = { isSubsequence };
