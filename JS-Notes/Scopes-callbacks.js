//  Scope refers to the context in which variables are declared and can be accessed. In JavaScript, there are two main types of scope: Global scope and Local scope...




// Global Scope- Variables declared outside of any function or block have global scope. They can be accessed from any part of the code, including inside functions.

let globalVar = "I'm global!";

function example() {
    console.log(globalVar); // Accessing global variable
}

example(); // Output: I'm global!
console.log(globalVar); // Output: I'm global!

// In this example, globalVar is accessible both inside and outside the example function because it's declared globally.







// Local Scope- Variables declared inside a function have Local Scope. They are only accessible within that function.

function example() {
    let localVar = "I'm local!";
    console.log(localVar);
}

example(); // Output: I'm local!

// This will throw an error because localVar is not defined outside the function
// console.log(localVar);

// In this example, localVar is accessible only inside the example function. Attempting to access it outside the function would result in an error.





// Local Scope in Nested Functions
function outer() {
    // outerVar is accessible within the outer function
    let outerVar = "I'm outer!";

    function inner() {
        // innerVar is accessible within the inner function
        let innerVar = "I'm inner!";
        console.log(outerVar); // Access outer variable
        console.log(innerVar); // Access inner variable
    }

    inner(); // Call the inner function
}

outer(); // Call the outer function

// In this example, both outerVar and innerVar are declared within their respective functions, demonstrating local scope. The inner function has access to variables in its own scope and the scope of the outer function.






// Local Scope in a Loop
function loopExample() {
    for (let i = 1; i <= 3; i++) {
        // i is only accessible within the loop block
        console.log(i);
    }

    // Attempting to access i outside the loop would result in an error
    // console.log(i);
}

loopExample();

// The variable i is declared using let within the for loop, creating a local scope for the loop body. Attempting to access i outside the loop would result in an error.




// LEXICAL SCOPE - JavaScript uses lexical scoping, meaning the scope of a variable is determined by its location in the source code. If a variable is declared inside a function, it has access to its own scope and the scopes of all the outer (enclosing) functions

function outer() {
    let outerVar = "I'm outer!";

    function inner() {
        let innerVar = "I'm inner!";
        console.log(outerVar); // Access outer variable
        console.log(innerVar); // Access inner variable
    }

    inner();
}

outer();

// In this example, the inner function has access to both outerVar and innerVar. This is an example of lexical scope, where the inner function can access variables from its outer scope.

// BLOCK SCOPE - Block scope in JavaScript refers to the visibility and accessibility of variables within a specific block of code, which is denoted by curly braces {}.

function example() {
    // Function-scoped variable
    var functionVar = "I'm function-scoped!";
    if (true) {
        // Block-scoped variable
        let blockVar = "I'm block-scoped!";
        console.log(functionVar); // Accessible
        console.log(blockVar); // Accessible
    }
    console.log(functionVar); // Accessible
    // Attempting to access blockVar here would result in an error \/
    // console.log(blockVar);
}

example();




//  Functions as First Class Citizens

// In JavaScript, functions are considered "first-class citizens," which means they can be treated like any other data type, such as numbers, strings, or objects. This concept allows functions to be...

// Assigned to Variables- You can assign a function to a variable:
const greet = function(name) {
    console.log(`Hello, ${name}!`);
};

// passed as arguments to other functions:
function sayHello(greetingFunction, name) {
    greetingFunction(name);
}

sayHello(greet, 'John');


// Returned from other functions:
function createGreeter() {
    return function(name) {
        console.log(`Hello, ${name}!`);
    };
}

const greetFunction = createGreeter();
greetFunction('Alice');

// Stored in data structures:
const functionArray = [greet, function(name) {
    console.log(`Hola, ${name}!`);
}];

functionArray[0]('Bob');  // Calls the greet function
functionArray[1]('Maria');  // Calls the second function


// what is a Callback? 

// In JavaScript, a callback is a function passed as an argument to another function. The callback function is then invoked or executed inside the outer function. Callbacks are commonly used in asynchronous operations, event handling, and other scenarios where you want to perform actions after certain events or operations have completed.

// example of a CALLBACK:

// Example function with a callback

// Function with a callback
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback(name); // invoking the callback function
}
  
  // Callback function
  function sayGoodbye(name) {
    console.log("Goodbye, " + name + "!");
}
  
  // Using the function with a callback
greet("Alice", sayGoodbye);
  

// another example for callbacks

function iLove(fruit, callback){
    console.log("I love " + fruit)
    callback(fruit) // we are setting up a blank funtion to use in the future.
  }
  
  function otherFruit(fruit){
    console.log("But i Hate " + fruit + " Juice")
  }
  
  iLove("apple", otherFruit)


 