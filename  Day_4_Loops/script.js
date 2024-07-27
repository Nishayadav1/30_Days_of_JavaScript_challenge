// Loop

// For Loop------------------------------------
// 1.
for(let i=1;i<11;i++){
   console.log(i);
}

// 2.
let n=5;
for (let j=1;j<11;j++){
    console.log(n*j)
}

// while loop--------------------------------
let s=0;
let k=1;
while(k<11){
    s+=k;
    k++
}
console.log(s)

// 4.
let l=10;
while(l>0){
    console.log(l)
    l--
}

// Do... while Loop----------------------------
// 5.
let m=1;
do{
    console.log(m)
    m++
}while(m<=5);

// 6.
let o=6;
let r1=1;
let p=1
do{
    r1*=p;
    p++
}while(p<=o);
console.log(r1)


// Nested Loop------------------------------------
// 7.
for (let i1 = 1; i1 <= 5; i1++) {
    console.log("*".repeat(i1));
}

// loop control Statements------------------------
// 8.
for (let i2 = 1; i2 <= 10; i2++) {
    if (i2 === 5) {
        continue;// continue
    }
    console.log(i2);
}

// 9.
for (let i3 = 1; i3 <= 10; i3++) {
    if (i3 === 7) {
        break;//break
    }
    console.log(i3);
}


// -----------------------Achievement-------------------------------------
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. continue
// 5. break



