// Generic array that can hold numbers or strings
var mixedArray = [5, "apple", 2, "banana", 8, "cherry"];
// Generic function to sort an array of numbers or strings
function sortArray(arr) {
    return arr.sort();
}
// Sorting the mixed array (TypeScript will infer the type)
var sortedMixedArray = sortArray(mixedArray);
console.log("Sorted Mixed Array:", sortedMixedArray);
// Creating a number array
var numberArray = [5, 2, 8, 1, 9];
var sortedNumberArray = sortArray(numberArray);
console.log("Sorted Number Array:", sortedNumberArray);
// Creating a string array
var stringArray = ["apple", "banana", "cherry", "date"];
var sortedStringArray = sortArray(stringArray);
console.log("Sorted String Array:", sortedStringArray);
