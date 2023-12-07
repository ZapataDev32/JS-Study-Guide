//  *******forEach*******

//  forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element

// FOR EACH PRACTICE

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10





let nums = [5,10,15,20,25];

// instead of putting (function (num) /  we instead put an arrow (num => {
nums.forEach(num => {
  // console.log(n);
  console.log(num*2) 
});

// you can also print index as well! Index = i

nums.forEach((n,i) => {
   console.log(n,i);
   
});



// another for each example


// let users = ['armin','mike','lesli'];


// users.forEach(function(user){
//   console.log(users)
// })

//  a for each example but with a function as an example

 let fruits = ["apple","orange","banana", "coconut"];

fruits.forEach(upperCase)
fruits.forEach(display);

//  this function uppercase each item in the array
function upperCase(element,index,array){
  array[index] = element.toUpperCase()
}

function display(element){
  console.log(element);
}




//  *******Map*******




// .map() = accepts a callback and applies that function to each element of an array, then return a new array


// map examples

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled);
// Output: [2, 4, 6, 8, 10]




// let numbers = [1,2,3]


// let squared = numbers.map(function(number){
//   return number * number;
// })

// console.log(squared)




// const fruits = ['apple', 'banana', 'orange', 'kiwi'];

// // Using .map() to create a new array with the lengths of each fruit name
// const fruitLengths = fruits.map(fruit => fruit.length);

// console.log(fruitLengths);
// // Output: [5, 6, 6, 4]



// const students = ["elijah", "lilith","diana", "edgar"]
// const studentUpper = students.map(upperCase);

// console.log(studentUpper)

// function upperCase(element){
//   return element.toUpperCase();
// }



const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]
const formattedDates = dates.map(formatDates);

console.log(formattedDates);


// In JavaScript, the split method is a built-in method for strings that allows you to split a string into an array of substrings based on a specified delimiter. The original string remains unchanged.


function formatDates(element){
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}












//  *******filter*******


// In JavaScript, the filter method is like a sieve for arrays. It creates a new array by sifting through each element of the original array, keeping only the elements that meet a specific condition defined by a provided function. This method doesn't change the original array but constructs a new one containing only the elements that pass the test specified in the function.

// this filters all even numbers
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);
// Output: [2, 4]




// Example 2: Filtering numbers greater than 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersGreaterThan5 = numbers.filter(function (num) {
  return num > 5;
});

console.log(numbersGreaterThan5);
// Output: [6, 7, 8, 9, 10]






// filter strings by length

const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

const shortWords = words.filter(function (word) {
  return word.length < 6;
});

console.log(shortWords);
// Output: ['apple', 'kiwi', 'grape']



// Example 2: Filtering fruits that start with 'a'

const fruits = ['apple', 'banana', 'kiwi', 'orange', 'grape'];


const fruitsStartingWithA = fruits.filter(function (fruit) {
  return fruit.toLowerCase().startsWith('a');
});

console.log(fruitsStartingWithA);
// Output: ['apple']




//  filtering objects by property value

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 }
];
  
const adults = people.filter(function (person) {
    return person.age >= 30;
});
  
console.log(adults);
  // Output: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]
  