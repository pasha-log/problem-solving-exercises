// Write a function called twoArrayObject which accepts two arrays of varying lengths.
// The first array consists of keys and the second one consists of values.
// Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null.
// If there are not enough keys, just ignore the rest of values.

// Examples:

// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

function twoArrayObject(arr1, arr2) {
	let obj = {};

	// Using the foreach method
	arr1.forEach((i, j) => {
		obj[i] = arr2[j];
		if (arr2[j] === undefined) obj[i] = null;
	});
	return obj;
}

module.exports = { twoArrayObject };
