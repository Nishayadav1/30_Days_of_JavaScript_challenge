// variable declaration  


// var
// Scope:          Function-scoped.
// Hoisting:       Variables declared with var are hoisted to the top of their scope and initialized with undefined.
// Re-declaration: Allowed within the same scope.

function example(){
    var a=10;
    if (true){
        var a=20 //x re-declared
        console.log(a)  //20   
    }
    console.log(a)//20
}


// let
// Scope:          Block-scoped.
// Hoisting:       Variables declared with let are hoisted to the top of their block but are not initialized.
// Re-declaration: Not allowed within the same scope.

function example() {
    let x = 10;
    if (true) {
      let x = 20; // different variable, block-scoped
      console.log(x); // 20
    }
    console.log(x); // 10
  }
  example();
  

//   const
//   Scope:            Block-scoped.
//   Hoisting:         Variables declared with const are hoisted to the top of their block but are not initialized.
//   Re-declaration:   Not allowed within the same scope.
//   Assignment:       Must be initialized at the time of declaration and cannot be reassigned.  

function example() {
    const x = 10;
    if (true) {
      const x = 20; // different variable, block-scoped
      console.log(x); // 20
    }
    console.log(x); // 10
  }
  example();

  

 
  

// task-----------------------
// varible Declaration
// 1.
var number=1;
console.log(number)

// 2.
let string='nisha'
console.log('string')


// constant Declaration
// 3.
const isAvailable = true;
console.log(isAvailable);

//Data Type
// 4.
const num = 42;              // Number
const str = "Hello, world!"; // String
const bool = true;           // Boolean
const obj = {                // Object
  name: "Alice",
  age: 30
};
const arr = [1, 2, 3, 4, 5]; // Array


console.log(typeof num);  // "number"
console.log(typeof str);  // "string"
console.log(typeof bool); // "boolean"
console.log(typeof obj);  // "object"
console.log(typeof arr);  // "object" (arrays are a type of object in JavaScript)


// Reassigning Varibales
// 5.
// var
var myVariable = 10;         // Initial value
console.log(myVariable);     // Logs: 10

myVariable = 20;             // Reassigned value
console.log(myVariable);     // Logs: 20


// let
let myVariable1 = 10;           // Initial value
console.log(myVariable1);       // Logs: 10

myVariable = 20;               // Reassigned value
console.log(myVariable);       // Logs: 20

6.
// const
const value = 10;   // Initial assignment
console.log(value); // Output: 10

value = 20;       // Attempting to reassign a new value
console.log(value); // This will throw an error
// Uncaught TypeError: Assignment to constant variable.



// --------Achievement-------------//
// 1.know how to declare varibale useing var,let and const
// 2.understand the diffrent data type 
// 3.able to use typeof opertor to identify the data type os a varibale
// 4.understand the concept of barible reassigning and immutabillity of const varibles