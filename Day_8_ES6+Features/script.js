// ES6+ Features

// temple literals---------------------------------------
// 1.
let pername="nisha";
let age=23;
console.log(`my name is ${pername} and age is ${age}`);

// 2.
const multiLineString = `
This is a multi-line string.
It spans across multiple lines.
You can include line breaks and indentation as needed.
`;

console.log(multiLineString);


// Destructring---------------------------------------
// 3.
let l=[1,2,3,4]
const [a,b]=l
console.log(`l[0]=${a} and l[1]${b}`)

// 4.
const book={
    name:"nisha",
    year:2030,
    athuor:"balck"
}

const {name,year,athuor}=book
console.log(`name=${name} and athour= ${athuor}`)

// Speard and rest Operator-------------------------------------------
// ---the spread and rest operators are represented by the same syntax: `...` Despite using the same syntax, they serve different purposes
// speard operator:- To expand or spread elements of an iterable (like an array) into individual elements or to merge objects.
// example:- 
        // const arr1 = [1, 2, 3];
        // const arr2 = [4, 5, 6];
        // const combined = [...arr1, ...arr2];
        // console.log(combined); // [1, 2, 3, 4, 5, 6]

// rest operator  :-Purpose: To collect multiple elements into a single array or object. It is used in function parameters and destructuring assignments.
// example:-
        // function sum(...numbers) {
        //     return numbers.reduce((total, num) => total + num, 0);
        // }
        
        // console.log(sum(1, 2, 3, 4)); // 10
        // console.log(sum(5, 10));      // 15
  

// 5.
const originalArray = [1, 2, 3];
const additionalElements = [4, 5, 6];

const newArray = [...originalArray, ...additionalElements];
console.log(newArray); // [1, 2, 3, 4, 5, 6]


// 6.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  const result = sum(1, 2, 3, 4, 5);
  console.log(result); // 15


// default parameter-------------------------------------------
// 7.
function multiply(a, b = 1) {
    return a * b;
  }
  
  // Calling the function with both parameters
  const result1 = multiply(5, 3);
  console.log(result1); // 15
  
  // Calling the function with only the first parameter
  const result2 = multiply(7);
  console.log(result2); // 7
  

// Enhanced object literals----------------------------------------------------------
// 8.
const n1= 'Alice';
const a1= 25;

const person = {
  n1,
  a1,
  greet() {
    console.log(`Hello, my name is ${this.n1} and I am ${this.a1} years old.`);
  },
  ['isAdult']: age >= 18
};
console.log(person);
person.greet();

// 9.
const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

const person1 = {
  [propName1]: 'John',
  [propName2]: 'Doe',
  [propName3]: 30
};

console.log(person1);
// Output: { firstName: 'John', lastName: 'Doe', age: 30 }

