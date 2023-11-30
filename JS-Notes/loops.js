// for loops examples


// basic for loop

for (let i = 0; i < 5; i++){
    console.log(i);
}
 
// for (let i = 0; i <5; i++){
//   console.log('Hello World',i) 
// } 

// for(let x = 0; x < 5; x++){
//   console.log(x)
// }


// looping through an array 

const fruits = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


let studentArray = ['Kenny','Kyle','Ivan','Ron']

for (let student = 0; student < studentArray.length; student++){
  console.log(`yo, ${studentArray[student]}`)
}

//  skipping Iterations: this loop skips printing when 'i' is 2
for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue; // Skip iteration when i is 2
    }
    console.log(i);
}
  
//   breaking out of a loop
for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break; // Exit the loop when i is 3
    }
    console.log(i);
}

// looping backwards
for (let i = 4; i >= 0; i--) {
    console.log(i);
}
  
// for in loop(for Objects)

const person = {
    name: 'John',
    age: 30,
    job: 'developer'
  };
  
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
  