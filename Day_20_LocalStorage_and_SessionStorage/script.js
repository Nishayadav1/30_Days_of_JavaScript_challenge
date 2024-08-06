// localStorage and sessionStorage

// Understanding LocalStorage--------------------------------------------------------------------
// 1.
        // Save a string value to localStorage
        const key = 'exampleKey';
        const value = 'Hello, localStorage!';
        localStorage.setItem(key, value);

        // Retrieve the string value from localStorage
        const retrievedValue = localStorage.getItem(key);

        // Log the retrieved value to the console
        console.log(retrievedValue); //Hello, localStorage!

// 2.     

document.addEventListener('DOMContentLoaded', () => {
    // Define an object to be saved to localStorage
    const exampleObject = {
        name: 'John Doe',
        age: 30,
        city: 'New York'
    };

    // Convert the object to a JSON string
    const jsonString = JSON.stringify(exampleObject);

    // Save the JSON string to localStorage
    localStorage.setItem('exampleObjectKey', jsonString);

    // Retrieve the JSON string from localStorage
    const retrievedJsonString = localStorage.getItem('exampleObjectKey');

    // Parse the JSON string back to an object
    const retrievedObject = JSON.parse(retrievedJsonString);

    // Log the retrieved object to the console
    console.log(retrievedObject);

});//----------------{ name: "John Doe", age: 30, city: "New York"}

//Using LocalStorage------------------------------------------------------------------------------------
// 3.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const displayData = document.getElementById('displayData');

    // Function to save form data to localStorage
    const saveFormData = (name, email) => {
        const userData = { name, email };
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    // Function to retrieve and display form data from localStorage
    const displayFormData = () => {
        const savedData = localStorage.getItem('userData');
        if (savedData) {
            const userData = JSON.parse(savedData);
            displayData.innerHTML = `<p>Name: ${userData.name}</p><p>Email: ${userData.email}</p>`;
        }
    };

    // Event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        saveFormData(name, email);
        displayFormData();
        form.reset();
    });

    // Display saved data on page load
    displayFormData();
});



// 4.

// Function to log all localStorage content
function logLocalStorage() {
    console.log('localStorage content:');
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
}

// Add a sample item to localStorage for demonstration purposes
localStorage.setItem('sampleItem', 'This is a sample item');

// Log localStorage content before removal
console.log('Before removal:');
logLocalStorage();

// Remove the item from localStorage
localStorage.removeItem('sampleItem');

// Log localStorage content after removal
console.log('After removal:');
logLocalStorage();

// Using SessionStorage-------------------------------------------------------------------
// 5.
    // Save a string value to sessionStorage
    sessionStorage.setItem('exampleKey', 'This is an example value');

    // Retrieve the string value from sessionStorage
    const retrievedValue1 = sessionStorage.getItem('exampleKey');

    // Log the retrieved value
    console.log('Retrieved value:', retrievedValue1);


// 6.
   // Define an object
    const exampleObject = {
        name: 'John Doe',
        age: 30,
        city: 'New York'
    };

    // Convert the object to a JSON string and save it to sessionStorage
    sessionStorage.setItem('exampleObject', JSON.stringify(exampleObject));

    // Retrieve the JSON string from sessionStorage
    const retrievedJSON = sessionStorage.getItem('exampleObject');

    // Parse the JSON string back into an object
    const retrievedObject = JSON.parse(retrievedJSON);

    // Log the retrieved object
    console.log('Retrieved object:', retrievedObject);



// Using SessionStorage-----------------------------------------------------------
// 7. // ---------sessionstorage.html file
// 8. // ---------sessionstorage.html file

// comparing Localstorage and sessionstorage------------------------------------------------------
// 9.
    // Function to save data to both localStorage and sessionStorage
    function saveToStorage(key, value) {
        // Save to localStorage
        localStorage.setItem(key, value);

        // Save to sessionStorage
        sessionStorage.setItem(key, value);

        // Retrieve and log values from localStorage
        const localStorageValue = localStorage.getItem(key);
        console.log(`localStorage: ${key} = ${localStorageValue}`);

        // Retrieve and log values from sessionStorage
        const sessionStorageValue = sessionStorage.getItem(key);
        console.log(`sessionStorage: ${key} = ${sessionStorageValue}`);
    }

    // Example usage of the function
    saveToStorage('exampleKey', 'exampleValue');



// 10.

// Function to clear all data from localStorage and sessionStorage
function clearAllStorage() {
    // Clear localStorage
    localStorage.clear();
    console.log('localStorage cleared.');

    // Clear sessionStorage
    sessionStorage.clear();
    console.log('sessionStorage cleared.');

    // Verify localStorage is empty
    if (localStorage.length === 0) {
        console.log('localStorage is empty.');
    } else {
        console.log('localStorage is not empty.');
    }

    // Verify sessionStorage is empty
    if (sessionStorage.length === 0) {
        console.log('sessionStorage is empty.');
    } else {
        console.log('sessionStorage is not empty.');
    }
}

// Example usage of the function
clearAllStorage();
