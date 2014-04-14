var assert = function (a,b) {
	if (a !== b) {
	console.error('Expected', a, 'to equal', b);
}
else {
	console.log('Test passed!', a, 'equals', b);
}
};
//this is the UNIT TESTING FRAMEWORK


assert(first (['a', 'b', 'c', 2]), ['a','b']);
assert(first (['x', 'y', 'z', 2]), ['x','y']);
//this is the TEST SUITE & multiple assertions are the UNIT TEST