//  Arrays examples

//  Numeric Array
let numbers = [1, 2, 3, 4, 5];
// string Array
let fruits = ["apple", "orange", "banana", "grape"];
// Mixed Data Type Array
let mixedArray = [1, "apple", true, 3.14, "banana"];
// Nested Array
let nestedArray = [
    [1, 2, 3],
    ["apple", "orange", "banana"],
    [true, false, true]
];

// Array of Objects

let students = [
    { name: "John", age: 25, grade: "A" },
    { name: "Jane", age: 22, grade: "B" },
    { name: "Doe", age: 24, grade: "A-" }
];


// accessing array in elements
let colors = ["red", "green", "blue"];
console.log(colors[0]); // Output: red
console.log(colors[2]); // Output: blue


// Push - Adds one or more elements to the end of an array.

let fruits = ["apple", "banana"];
fruits.push("orange", "grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]


// POP - Removes the last element from an array.

let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: "orange"
console.log(fruits); // Output: ["apple", "banana"]


// CONCAT - In JavaScript, the concat method is used to concatenate (combine) two or more arrays. It does not modify the original arrays but instead returns a new array containing all the elements from the original arrays.

let array1 = [1, 2, 3];
let array2 = ["a", "b", "c"];
let concatenatedArray = array1.concat(array2);

console.log(concatenatedArray);
// Output: [1, 2, 3, "a", "b", "c"]

console.log(array1);
// Output: [1, 2, 3] (original array1 is unchanged)

console.log(array2);
// Output: ["a", "b", "c"] (original array2 is unchanged)


// In this example, concat is called on array1 with array2 as an argument. It creates a new array (concatenatedArray) that contains all the elements from array1 followed by all the elements from array2. The original arrays (array1 and array2) remain unchanged.


// CONCAT in multiple arrays
let array1 = [1, 2, 3];
let array2 = ["a", "b", "c"];
let array3 = [true, false];

let concatenatedArray = array1.concat(array2, array3);

console.log(concatenatedArray);
// Output: [1, 2, 3, "a", "b", "c", true, false]
