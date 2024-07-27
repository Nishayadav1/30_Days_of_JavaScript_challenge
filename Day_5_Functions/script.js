// Function

// function declaration------A function declaration defines a named function that can be used before it is declared in the code.------------------
// 1.
function oddEven(n){
  if(n%2==0){
    console.log("Even")
  }
  else{
    console.log("Odd")
  }
}
oddEven(3);

// 2.
function squareNum(n1){
  return (n1*n1)
}
console.log(squareNum(5))

// function expression:----------A function expression defines a function as part of a variable assignment. It cannot be used before it is defined.---------------
// 3.
let maxnum= function(a,b){
   return(a>b) ? a:b;
};
console.log(maxnum(5,10))//10

// 4.
let concatestr= function(a1,b1){
    return(a1+b1)
 };
 console.log(concatestr("5","10"))


// Arrow function----------------------------------------------------------
// 5.
let sumNumr= (a2,b2)=>{
    return(a2+b2);
 };
 console.log(sumNumr(5,10));

// 6.
let checkStr= (s,char)=>s.includes(char);
 console.log(checkStr("nisha",'h'));

//  function parameters and default values-----------------------------
// 7.
let productNum= (a3,b3=1)=>{
    return a3*b3;
}
console.log(productNum(2,5));//10--2*5
console.log(productNum(2))//2==2*1

// 8.
let nameAgeGreeting=(n,age='18',greet='Hello')=>{
    return `${greet} ${n} is ${age} year old`;
}
console.log(nameAgeGreeting('nisha',20,'goodmorning'));
console.log(nameAgeGreeting(n='kajal',32))
console.log(nameAgeGreeting('ajay'))

// Higher-Order Function-------Takes one or more functions as arguments.
                            // Returns a function as its result.----------------

// 9.
function highOder(fun,num1){
    fun(num1)
}
function fun(num){
    console.log('function2',num)
}
highOder(fun,1)
highOder(fun,2)
highOder(fun,3)
highOder(fun,4)

//or
function higherOrderFunc(callback) {
    console.log("Before callback");
    callback();
    console.log("After callback");
}

function someFunction() {
    console.log("Inside callback function");
}

higherOrderFunc(someFunction);


// 10.
function sumNum1(a,b){
    a()
    b()    
}
function apple(){
   console.log("Apple")

}
function mango(){
   console.log("Mango")
}
sumNum1(apple,mango)


// ---------------------Achievement--------------------------------
// function declaration
// function expression
// arrow function
// function parameters and default values
// Higher-Order Function