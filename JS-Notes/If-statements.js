// basic if else statement examples


// a basic if statement
let x = 10;

if (x > 5) {
  console.log('x is greater than 5');
}

// a simple if-else statement

let temperature = 25;

if (temperature > 30) {
  console.log('It\'s a hot day!');
} else {
  console.log('It\'s not too hot today.');
}


// if-else-if-else statement

let time = 14;

if (time < 12) {
  console.log('Good morning!');
} else if (time < 18) {
  console.log('Good afternoon!');
} else {
  console.log('Good evening!');
}

// nested if statement
let a = 5;
let b = 10;

if (a > 0) {
  if (b > 0) {
    console.log('Both a and b are positive.');
  } else {
    console.log('a is positive, but b is not.');
  }
} else {
  console.log('a is not positive.');
}



// other example #1
let hour = 20;

if(hour >= 6 && hour < 12)
  console.log('good morning');
else if (hour >= 12 && hour < 18)
 console.log('Good afternoon');
else{
    console.log('Good evening');
}
  



// other example #2
// const favoriteAnimal = "cat"

// if (favoriteAnimal === "cat"){
//   console.log("cats are great")
// } else if (favoriteAnimal == "dog"){
//   console.log("dogs are kinda loud")
// }  else if (favoriteAnimal == "shark"){
//   console.log("that's an interesting choice")
// }  else {
//   console.log("I have never heard of that animal")
// }



// switch examples
const favoriteAnimal = "shark"

switch(favoriteAnimal){
    case"cat": 
      console.log("Cat")
      break
  case "dog":
    console.log("dogs are kinda loud")
    break
  case "shark":
    console.log("that's an interesting choice")
    break
  default:
    console.log("I have never heard of that animal")
    break
}

// other switch example #1
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName);


// switch example #2

let fruit = 'apple';
let message;

switch (fruit) {
  case 'apple':
  case 'pear':
  case 'banana':
    message = 'This is a common fruit.';
    break;
  case 'strawberry':
  case 'blueberry':
    message = 'This is a berry.';
    break;
  default:
    message = 'Unknown fruit.';
}

console.log(message);


// switch statement without a 'break' (fall-through behavior)

let number = 2;
let result;

switch (number) {
  case 1:
    result = 'One';
  case 2:
    result = 'Two'; // Without a break statement, it will continue to the next case
    break;
  case 3:
    result = 'Three';
    break;
  default:
    result = 'Unknown';
}

console.log(result); // Outputs 'Two'


// switch statement with a function call
function greet(language) {
    switch (language) {
      case 'English':
        return 'Hello!';
      case 'Spanish':
        return '¡Hola!';
      case 'French':
        return 'Bonjour!';
      default:
        return 'Language not supported';
    }
  }
  
console.log(greet('English')); // Outputs 'Hello!'
console.log(greet('German'));  // Outputs 'Language not supported'
  



