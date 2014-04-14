// assert(first (['a', 'b', 'c'], 2), ['a','b']);
// assert(first (['x', 'y', 'z'], 2), ['x','y']);

assertDeepEquals(first (['a', 'b', 'c'], 2), ['a','b']);
//logs test passed! ["a", "b"] equals ["a", "b"]
assertDeepEquals(first (['x', 'y', 'z'], 2), ['x','y']);
//logs test passed! ["x", "y"] equals ["x", "y"]

//this is the TEST SUITE & multiple assertions are the UNIT TEST

//

//EXAMPLES
//assert(add(2,3), 5);
//assert(['x', 'y', 'z'].length, 3);
//assert("RefactorU".toUpperCase(), "REFACTORU");