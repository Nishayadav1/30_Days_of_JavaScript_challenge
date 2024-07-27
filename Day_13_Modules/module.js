// module.js
// createing exporting modules
function add(a, b) {
    return a + b;
}


const obj={
    name:"nisha",
    age:20,
    greet(){
        return`hello ${this.name} and I am ${this.age}`
    },
    birthday(){
         this.age+=1;
         return `Happy Birthday! I am now ${this.age} years old.`;
    }
    
};

// name export

export function sub(a,b){
      return (a-b)
}

export function multiple(a,b){
    return (a*b)
}


export function divid(a,b){
    return (a/b)
}


export function mod(a,b){
    return (a%b)
}

// default export

export default function greet(name){
    return `my name is ${name}`
}

export {add,obj,greet};//-------------------------------


//constant export
export const PI = 3.14159;
export const E = 2.71828;



//lodas
// steps:-1.( npm init -y )   ->This command creates a package.json file that will manage your dependencies.
// steps:-2. (npm install lodash) -> Use npm (Node Package Manager) to install a third-party module. For example, to install the lodash library, run:
// steps:-3.(const _ = require('lodash'))  ->import and use module


