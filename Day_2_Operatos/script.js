// Operators

// Arithmetic Operationa------------------
// 1.
let a=5;
let b=3;
console.log(a+b);//add

// 2.
let c=5;
let d=3;
console.log(c-d);//subtract

// 3.
let e=5;
let f=3;
console.log(e*f);//multiple

//4.
let g=5;
let h=3;
console.log(g/h);//divide

// 5.
let i=5;
let j=3;
console.log(i%j);//remainder


//Assignment perators---------------------
// 6. 
let k=5;
k+=3;
console.log(k); //+=

// 7.
let l=5;
l-=3;
console.log(l);//-=


// comparison operators--------------------
// 8.
if (a>b){
    console.log(a)//> grater then
}
else if (a<b){
    console.log(b)//less then
}
else{
    console.log('equal')
}

// 9.
if (a>=b){
    console.log(a)//> grater then and quale
}
else if (a<=10){
    console.log(b)//less then and quale
}
else{
    console.log('equal')
}


// 10.
let num1 = 10;
let num2 = '10'

let isEqual = (num1 == num2);//== check only value
console.log(`Using == : ${num1} == ${num2} is ${isEqual}`); // Output: true

let isStrictEqual = (num1 === num2);//=== check avlue and data type
console.log(`Using === : ${num1} === ${num2} is ${isStrictEqual}`); // Output: false


// logical operator-------------------------
// 11.
let m=3;
let n=9;
if ((n%m==0) && (m%2!=0 && n%2!=0)){
    console.log("condition is right with && operator (and)")
}
else{
    console.log('worng')// and (&&) opertor
}

// 12.
// 1.example
let o=3;
let p=5;
if ((o+p==10) || (m%2==0 || n%2==0)){
    console.log('Okay')
}
else{
    console.log("Bye","condition is right with || operator (or)")// or (||) opertor
}

// 2.example
let x = 5;
let y = 10;
let result = (x > 3) || (y < 5);
console.log(result); // Output: true


// 13.
// #1.example
if(a%2!=0){
console.log('odd')
}
else{
    console.log('even') // ! (not)
}
 
//2.example
let isRaining = true;
let isNotRaining = !isRaining;
console.log(isNotRaining); // Output: false


// ternary operator--------------------------write in one line
// 14.
let age = 20;
let isAdult = (age >= 18) ? "Yes" : "No";
console.log(isAdult); // Output: Yes



// Achivement (oprators)
// 1.Arithemtic
    // add (+)
    // subtract (-)
    // multipule (*)
    // divide (/)

//2.Assingnment
    // (+=)
    // (-=)

//3.comparison 
   // (>,<)
   // (>=,<=)
   // (==,===)// 1.Arithemtic


//4.Logical
  // And  (&&)
  // Or  (||)
  // not (!)

//5.Ternary Oprator
   // let varibale =(condition)? "ture output" : "flase output"   

