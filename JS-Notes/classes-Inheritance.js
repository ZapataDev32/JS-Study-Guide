// ********** Classes*******

// In JavaScript, a class is a blueprint for creating objects with shared properties and methods. It is a way to define a type of object and create instances of that type. 

// Here's a basic example of how a class is defined in JavaScript:

class Animal {
    // Constructor method for initializing object properties
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    // Method defined within the class
    makeSound() {
      console.log("Some generic sound");
    }
}
 
// Creating an instance of the class
const dog = new Animal("Buddy", "Dog");
  
// Accessing object properties
console.log(dog.name); // Output: Buddy
  
// Calling a method on the object
dog.makeSound(); // Output: Some generic sound


// here is another example of classes

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
  
const person1 = new Person("Alice", 30);
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.













// *********** Inheritance***************

// Inheritance in JavaScript refers to the mechanism by which a class can inherit properties and methods from another class. This allows you to create a hierarchy of classes, where a subclass can reuse and extend the functionality of a superclass.




// Here's a simple example to illustrate inheritance in JavaScript using the prototype chain:



// Superclass (Parent class)
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  // Subclass (Child class) inheriting from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      // Call the constructor of the superclass
      super(name);
      
      // Additional property specific to Dog
      this.breed = breed;
    }
  
    // Method specific to Dog
    bark() {
      console.log("Woof! Woof!");
    }
  }
  
  // Creating an instance of Dog
  const myDog = new Dog("Buddy", "Golden Retriever");
  
  // Accessing inherited method from the superclass
  myDog.makeSound(); // Output: Some generic sound
  
  // Calling a method specific to Dog
  myDog.bark(); // Output: Woof! Woof!
  
  // Accessing properties inherited from the superclass
  console.log(myDog.name); // Output: Buddy
  