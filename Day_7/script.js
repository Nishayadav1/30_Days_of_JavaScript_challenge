// Object :-

// Object creation and Access---------------------------------------
// 1.
const obj={
    title:'book',
    author:'nisha',
    year:2024, 
    methods:function(){
        return(`${this.title} by ${this.author}`)
    },
    updateYear: function(year){
       this.year=year;
    },
    method1 :function(){
        return (`${this.year} and ${this.author}`)
    }
}
obj.updateYear(2020)
console.log(obj)

// 2.
console.log(obj.title)
console.log(obj.author)

// object methods---------------------------------------
// 3.
console.log(obj.methods())

// 4.
console.log(obj)


// Nested objects-----------------------------------------
// 5.
let book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

let book2 = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

let book3 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813
};

let library = {
    name: "City Library",
    books: [book1, book2, book3]
};

console.log(library);


// 6.
console.log(library.name)
library.books.forEach(i=>{
    console.log(i.title);
})

// this keyword-----------------------------------------------------
// this : the this keyword in JavaScript refers to the object that is currently being used. The meaning of this changes depending on how you are using it.
// 7.
console.log(obj.method1())

// object iteration-----------------------------------------------
// 8. for...in
// Define the book object
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}


// 9.object.keys and object.values--------------------------------
let keys=Object.keys(obj)
let values=Object.values(obj)

console.log("keys:-------------- ")
keys.forEach(key=>{
    console.log(key)
})

console.log("values:------------");
values.forEach(value=>{
    console.log(value)
})

// Achievements-------------------------------------
// 1.Create and manipulate objects with properties and methods.
// 2.Understand and use the this keyword in object methods.
// 3.Work with nested objects and arrays of objects.
// 4.Iterate over an object's properties using loops and built-in methods.