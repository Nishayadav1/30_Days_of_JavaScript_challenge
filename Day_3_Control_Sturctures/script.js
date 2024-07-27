// Control Sturctures

// If-Else Statements--------------------------
// 1.
let a1=1;
if (a1>0){
    console.log("positive number")
}else if(a1<0){
    console.log('negative number')
}else{
    console.log('equal to 0')
}

// 2.
let age=18;
if (age>=18){
    console.log("eligible to vote")
}else{
    console.log('not eligible to vore')
}


//Nested If-Else Statements---------------------------
// 3.
let a=1;
let b=2;
let c=3;
let largest;
if (a >= b) {
    if (a >= c) {
        largest = a;
    } else {
        largest = c;
    }
} else {
    if (b >= c) {
        largest = b;
    } else {
        largest = c;
    }
}

//Switch Case--------------------------------
// 4.
let daynum=6;
let dayName;
switch(daynum){
    case 1:
        dayName="Sunday";
        break;
    case 2:
        dayName="Monday";
        break;
    case 3:
        dayName="Tuesday";
        break;
    case 4:
        dayName="Wednesday";
        break;
    case 5:
        dayName="Thursday";
        break;
    case 6:
        dayName="Friday";
        break;
    case 7:
        dayName="Saturday";
        break; 
    default:
        dayName="Invalid day";     
}
 console.log(dayName)

// 5. 
let score = 80;
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    case (score >= 0 && score < 60):
        grade = 'E';
        break;
    default:
        grade = 'Check again';
}

console.log(grade); // Output: B


// Conditional(ternary) Operator-------------
// 6.
let num=60;
let output=(num%2==0)?"even":"odd";
console.log(output)

//Combining Conditions-----------------------
// 7.
let year = 2024;
let isLeapYear = false;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeapYear = true;
}
if (isLeapYear) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


