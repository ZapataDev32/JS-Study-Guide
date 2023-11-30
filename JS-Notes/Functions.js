// examples of Functions and Parameters

// basic Function

function greet(name) {
    console.log("Hello, " + name + "!");
}
  
greet("John"); // Output: Hello, John!




//   functions with Parameters
function greet(name) {
    console.log("Hello, " + name + "!");
}
  
greet("Alice"); // Output: Hello, Alice!


function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
  
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
  






// functions with return value

function add(a, b) {
     return a + b; //without return, the function is Undefine, when plugging a function into a let, you need to return, so that the function has value.
}
  
let sum = add(3, 4);
console.log(sum); // Output: 7


// other examples of return value



// return Objects

function createPerson(name, age) {
    return {
      name: name,
      age: age,
    };
}
  
const person = createPerson("Alice", 25);
console.log(person); // Output: { name: 'Alice', age: 25 }
 

//  returning Arrays

function generateNumbers(count) {
    const numbers = []; // a blank array is made
    for (let i = 1; i <= count; i++) {
      numbers.push(i); // remember push adds onto an array
    }
    return numbers; // remember for any of the code above to work we need to return all of the values we created, or else we get Undefine
}
  
const generatedNumbers = generateNumbers(5);
console.log(generatedNumbers); // Output: [1, 2, 3, 4, 5]
  



// remember a return is adding any value to a function, if you do not return, you will get Undefine, below is an example of a function not returning anything

function noReturnValue() {
    // No return statement
}
  
const result = noReturnValue();
console.log(result); // Output: undefined
  