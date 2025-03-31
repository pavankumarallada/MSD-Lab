// Generic array that can hold numbers or strings
const mixedArray: (number | string)[] = [5, "apple", 2, "banana", 8, "cherry"];

// Generic function to sort an array of numbers or strings
function sortArray<T extends number | string>(arr: T[]): T[] {
  return arr.sort();
}

// Sorting the mixed array (TypeScript will infer the type)
const sortedMixedArray = sortArray(mixedArray);
console.log("Sorted Mixed Array:", sortedMixedArray);

// Creating a number array
const numberArray: number[] = [5, 2, 8, 1, 9];
const sortedNumberArray = sortArray(numberArray);
console.log("Sorted Number Array:", sortedNumberArray);

// Creating a string array
const stringArray: string[] = ["apple", "banana", "cherry", "date"];
const sortedStringArray = sortArray(stringArray);
console.log("Sorted String Array:", sortedStringArray);