// Error Handling

// Basic error handling with try-catch----------------------------------------------------------------------
// 1.
function handleError(){
    try {
        throw Error ("this is big error")
    } catch (error) {
        console.log(`Error message: ${error.message}, Error name: ${error.name}`)
    }
}
handleError();


// 2.
function handleError1(num1,num2){
      try {
        if (num2===0){
            throw Error ("check denominator")
        }
        else{
            console.log(num1/num2)
        }
      } catch (error) {
        console.log("error: ",error.message)
      }
}
handleError1(12,3);
handleError1(2,0);

//finally Block----------------------------------------------------------------------------------------------
// 3.
function handleError1(num1,num2){
    try {
      if (num2===0){
          throw Error ("check denominator")
      }
      else{
          console.log(num1/num2)
      }
    } catch (error) {
      console.log("error: ",error.message)
    }
    finally{
        console.log("Operaton complete")
    }
}
handleError1(12,3);
handleError1(2,0);


//custom Error Objects---------------------------------------------------------------
// 4.
function customError(name){
    try {
        name
        throw ReferenceError("name is not difine")
        
    } catch (error) {
        console.log(error.name, error.message)
    }
}
customError('nisha')


// 5.
function emptyStr(input){
    try {
        if (input.trim()===""){
            throw ValidationError("input cannot be empty")
        }
        else{
            console.log(input)
        }
    } catch (error) {
        console.log(error.name, error.message)    }
}
emptyStr("nisha")
emptyStr("")


// Error Handling Promise:------------------------------------------------
// 6.
function errorHandlingPromise(){
    return new Promise((resolve,reject)=>{
        const num=Math.random()>0.5;
        setTimeout(()=>{
            if (num){
                resolve('Promise resolved successfully!')
            } 
            else{
                reject(new Error("Promise rejected due to an error."));
            }
        },2000)
    })
}
errorHandlingPromise()
.then(num=>{
    console.log(num)
})
.catch(error=>{
    console.log("caught an error")
});


// 7.
function getData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject(new Error("Failed to fetch data."));
            }
        }, 1500);
    });
}

// Async function to fetch and handle data
async function fetchData(success) {
    try {
        // Await the promise and handle the resolved value
        const data = await getData(success);
        console.log(data);
    } catch (error) {
        // Handle any errors from the promise
        console.log("Error encountered:", error.message);
    }
}

// Call the async function with true to resolve or false to reject
fetchData(true); 


// Graceful Error Handling in Fetch-----------------------------------------------------------------------------------------
// 8.
// Function to fetch data from an invalid URL
function fetchDataFromInvalidUrl() {
    fetch('https://invalid-url-example.com/data')
        .then(response => {
            // Check if the response is not okay (status outside of range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json(); // Parse JSON if the response is okay
        })
        .then(data => {
            console.log('Data received:', data); // Log the data
        })
        .catch(error => {
            // Handle any errors that occur
            console.log('Error encountered:', error.message);
        });
}

// Call the function to fetch data
fetchDataFromInvalidUrl();


// 9.
// Function to fetch data from an invalid URL
function fetchDataFromInvalidUrl() {
    fetch('https://invalid-url-example.com/data')
        .then(response => {
            // Check if the response is not okay (status outside of range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json(); // Parse JSON if the response is okay
        })
        .then(data => {
            console.log('Data received:', data); // Log the data
        })
        .catch(error => {
            // Handle any errors that occur
            console.log('Error encountered:', error.message);
        });
}

// Call the function to fetch data
fetchDataFromInvalidUrl();


