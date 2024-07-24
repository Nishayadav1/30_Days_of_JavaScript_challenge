// Promises and Async/Await

// understanding promise--------------------------------------------
// 1.
const promisOne= new Promise((resolve)=>{
    setTimeout(()=>{
      console.log("Hello promise One")
      resolve();
    },2000)
})
promisOne
.then(()=>{
    console.log("promise one consumed")
})


// 2.
const promiseTwo= new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("Error")
       reject();
    },2000)
})
promiseTwo
.catch(()=>{
    console.log("something worng")
})


// Chaining Promise-----------------------------------------------
// 3.



// Using Async/Await-------------------------------------------------------
// 4.
async function getValue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise resolved with value")
        },2000)
    })
}
async function waiteForPromise(){
    try{
        const result=await getValue()
        console.log(result)
    }
    catch(error){
        console.log("E: ",error)
    }
}
waiteForPromise();


// 5.
function createRejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Promise rejected with an error"));
        }, 2000);
    });
}

async function handleRejectedPromise() {
    try {
        const result = await createRejectedPromise();
        console.log(result);
    } catch (error) {
        console.log('An error occurred:', error.message);
    }
}

handleRejectedPromise();



// Fetching Data from an API------------------------------------------------------
// 6.
let promiseFetch = fetch("https://goweather.herokuapp.com/weather/Curitiba");
promiseFetch
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });


// 7.
async function fethAsync(){
    try{
        let response = await fetch("https://goweather.herokuapp.com/weather/Curitiba");
        let data = await response.json();
        console.log(data)
    }
    catch(error){
        console.error('An error occurred:', error);

    }
}
fethAsync();


// Concurrent Promises-----------------------------------------------------
// 8.
async function fetchConcurrentData() {
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3'
    ];

    try {
        // Fetch all URLs concurrently
        const responses = await Promise.all(urls.map(url => fetch(url)));
        
        // Parse all responses as JSON concurrently
        const data = await Promise.all(responses.map(response => response.json()));
        
        // Log the data
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchConcurrentData();


// 9.
async function fetchFastestData() {
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3'
    ];

    try {
        // Fetch all URLs concurrently and resolve with the fastest one
        const response = await Promise.race(urls.map(url => fetch(url)));
        
        // Parse the fastest response as JSON
        const data = await response.json();
        
        // Log the data
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchFastestData();
