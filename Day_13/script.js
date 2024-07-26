// Modules
import {add, obj,sub,multiple,divid,mod,greet,PI,E} from "./module.js";
// Creating and exporting Modules-----------------------------------------------------------------
// 1.
const s=add(3,5)
console.log(s)

// 2.
console.log(obj.name)
console.log(obj.age)
console.log(obj.greet())
console.log(obj.birthday())


// Names and Default export------------------------------------------------------------------------------------
// 3.
console.log(sub(13,2))
console.log(multiple(24,1))
console.log(divid(6,3))
console.log(mod(8,2))


// 4.
const mam="nisha"
console.log(greet(mam))


// Imorting entire modules---------------------------------------------------------------
// 5. constant inport
console.log(PI)
console.log(E)


// uSING Third-PARTY module---**********************-----------------------------------------------------------------
// 6.LODASH -->IN VSCODE NOT WORKING -its library -->Lodash is a JavaScript utility library providing functions for array, object, and string manipulation, and more, simplifying coding tasks.
        // import _ from "lodash";

        // const users = [
        //   { user: "Eram", age: 25 },
        //   { user: "Sana", age: 30 },
        //   { user: "Mushir", age: 35 },
        // ];

        // // Find the user with age 30
        // const user = _.find(users, { age: 30 });
        // console.log(user); // { 'user': 'Sana', 'age': 30 }

//7. axios  --> its labrary --> It provides a simple and easy-to-use API for interacting with web services and APIs, allowing you to send and receive data over the network.
//i. mkdir myProject
//ii. cd myProject
//iii. npm init -y
//iv. npm install axios -->install acious npm

        // // Import axios
        // const axios = require('axios');

        // // Make a GET request to a public API
        // axios.get('https://jsonplaceholder.typicode.com/posts/1')
        //     .then(response => {
        //         console.log('Data:', response.data);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });





// module Bundling******************************
//---->Module bundling is a process used in web development to combine multiple JavaScript modules into a single file (or a few files) for efficient delivery and execution in the browser.



