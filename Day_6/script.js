// Arrays

// Array ceration and access-----------------------------
// 1.
let array=[1,2,3,4,5];
console.log(array)

// 2.
console.log(array[0])//first element
console.log(array[(array.length)-1])//last element


// Array Methods (basic)-----------------------------
// 3. push()--> add element enf od array
let a=array.push(6)
console.log(array) // return array
console.log(a)     // return push number

// 4. pop()--> remove the last element form the array
console.log(array.pop())//-- remove the last element
console.log(array)

//5. shift() -->remove the first element from the array
console.log(array.shift())//-- remove the first element
console.log(array)

// 6. unshift() -->add the first element to the begining of  the array
console.log(array.unshift(0))//-- add the first element
console.log(array)


//Array methods(Intermediate)---------------------------------
// 7.map --> method in JavaScript is used to create a new array by applying a function to each element of an existing array.
let newarray= array.map(array=>array*2);
console.log(newarray);


// 8.filter  -->The filter method creates a new array with all elements that pass the test implemented by the provided function.
let filterarray=array.filter(i=>i%2==0)
console.log(filterarray)

// 9.reduce -->The reduce method executes a reducer function on each element of the array, resulting in a single output value.
//  reduce(accumulator,current value,index)
let reduceArray= array.reduce((sum,i)=>sum+i,0)
console.log(reduceArray)


// array iteration------------------------------------------------
// 10.
for(let i=0;i<array.length;i++){
    console.log(array[i])
}

// 11.forEach mathhod

array.forEach(j=>{
    console.log(j)
})

// multi-dimensional Array
// 12.
const list=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let j=0;j<list.length;j++){
    for(let k=0;k<list[j].length;k++)
        console.log(list[j][k])
}

// 13.
console.log(list[1][2])//6


// ------------------Achievement------------------------
// array
// map,filter and reduce methods
// teo dimensional array
