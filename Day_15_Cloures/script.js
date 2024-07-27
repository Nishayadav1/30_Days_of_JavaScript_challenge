//Closures

// understanding closures----------------------------------------------------------
// 1.
function outerScope(num1,num2){
    let i=num1;
    let j=num2;
    function innerScope(){
       return i+j
    }
    return innerScope()
}
console.log(outerScope(10,20))

// 2.
function creatFun(){
    let count=0
    function increment(){
        count++
    }
     function getValue(){
        return count;
     }
    return{
        increment:increment,
        getValue:getValue
    } 
}

const myApp=creatFun()
myApp.increment();
console.log(myApp.getValue())//1

myApp.increment();
console.log(myApp.getValue());//2

myApp.increment();
console.log(myApp.getValue());//3


//Practical closures-------------------------------------------------------------------
// 3.
function gernateUniqueId(){
    let id=0;
    function cretaeuniqueId(){
        id++
        return id
    }
    return cretaeuniqueId;
}
const a=gernateUniqueId()
console.log(a())//1
console.log(a())//2
console.log(a())//3
console.log(a())//4
console.log(a())//5
console.log(a())//6

//4.
function userName(name){
    let a=name;
    function greet(){
        return `hello ${name}`
    }
    return greet;
}
const greetNisha = userName("nisha");
console.log(greetNisha())


//Cloures Loops---------------------------------------------------------------------------------------------------
// 5.
function clousreLoop(n){
    let l=[]
    for (let i=0;i<n;i++){
        l.push(()=>{
            console.log(i)
        });
   }
   return l;
}
let fun =clousreLoop(5);
fun.forEach(index=>index())

//module patten
// 6.
function createItemManager() {
    let items = []; // Private array to hold items

    // Add item
    function addItem(item) {
        if (!items.includes(item)) {
            items.push(item);
            console.log(`${item} added.`);
        } else {
            console.log(`${item} already exists.`);
        }
    }

    // Remove item
    function removeItem(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
            console.log(`${item} removed.`);
        } else {
            console.log(`${item} not found.`);
        }
    }

    // List all items in the collection
    function listItems() {
        if (items.length > 0) {
            console.log('Items:', items.join(', '));
        } else {
            console.log('No items in the collection.');
        }
    }

    // Return an object exposing the methods
    return {
        addItem: addItem,
        removeItem: removeItem,
        listItems: listItems
    };
}

const itemManager = createItemManager();

// Use the item manager
itemManager.addItem('Apple');  // Apple added.
itemManager.addItem('Banana'); // Banana added.
itemManager.listItems();      // Items: Apple, Banana
itemManager.removeItem('Apple'); // Apple removed.
itemManager.listItems();      // Items: Banana


// Memoization--------------------------------------------------------------------------------
// 7.
function memoize(fn) {
    const cache = {}; // Create a cache object to store results

    return function(...args) {
        const key = JSON.stringify(args); // Use the arguments as the cache key

        if (cache[key]) {
            console.log('Fetching from cache:', key);
            return cache[key]; // Return the cached result if it exists
        }

        const result = fn(...args); // Call the original function with the arguments
        cache[key] = result; // Store the result in the cache
        console.log('Computing and storing:', key);

        return result;
    };
}

// Example usage
function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Computing and storing: [1,2] -> 3
console.log(memoizedAdd(1, 2)); // Fetching from cache: [1,2] -> 3
console.log(memoizedAdd(2, 3)); // Computing and storing: [2,3] -> 5
console.log(memoizedAdd(2, 3)); // Fetching from cache: [2,3] -> 5


// 8.
function memoize(fn) {
    const cache = {}; // Create a cache object to store results

    return function(...args) {
        const key = JSON.stringify(args); // Use the arguments as the cache key

        if (cache[key]) {
            console.log('Fetching from cache:', key);
            return cache[key]; // Return the cached result if it exists
        }

        const result = fn(...args); // Call the original function with the arguments
        cache[key] = result; // Store the result in the cache
        console.log('Computing and storing:', key);

        return result;
    };
}

// Factorial function
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Memoized factorial function
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Computing and storing: [5] -> 120
console.log(memoizedFactorial(5)); // Fetching from cache: [5] -> 120
console.log(memoizedFactorial(6)); // Computing and storing: [6] -> 720 (uses cache for factorial(5))
console.log(memoizedFactorial(6)); // Fetching from cache: [6] -> 720
