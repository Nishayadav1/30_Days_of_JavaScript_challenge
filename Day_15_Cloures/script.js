//Closures

// understanding closures
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
