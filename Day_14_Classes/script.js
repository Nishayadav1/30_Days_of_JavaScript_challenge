// Class

// Class Definition-------------------------------------------------------------
// 1.
class person{
    constructor(){
         this.name="nisha",
         this.age=23
    }
    greet(){
        return `Hello ${this.name}`
     }
    updateName(newName){
        this.name=newName;
    } 
    updateAge(newAge){
        this.age=newAge
    }
}
const information= new person()
console.log(information.name)
console.log(information.age)
console.log(information.greet())

// 2.
information.updateName("kajal")
console.log("update name: ",information.name)
information.updateAge(12);
console.log("update age: ",information.age)


//class Inheritance-------------------------------------------------------------------
//-->Class inheritance is a feature in object-oriented programming that allows a class (known as the "child" or "subclass") to inherit properties and methods from another class (known as the "parent" or "superclass").
// 3.
//perent class
class Person {
    constructor(name,lastName, age) {
        this.name = name;
        this.lastName=lastName
        this.age = age;
    } 
       // Getter method to return the full name
    get fullName(){
        return `${this.name}${this.lastName}`
    }


    // Setter method to update the full name
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName || ''; // Handle cases where only one name is provided
        this.lastName = lastName || '';   // Handle cases where only one name is provided
    }
    greet() {
        return `Hello ${this.name}`;
    }
    // Static method to return a generic greeting message
    static genericGreeting() {
        return "Hello from the Person class!";
    }
}
//child class
class Student extends Person {
    static count=0//6 
    constructor(name, age, studentId) {
        super(name,age); // Call the constructor of the parent class
        this.studentId = studentId; // Corrected typo here
        Student.count++
    }

    getStudentId() {
        return this.studentId;
    }
    greet() {
        return `Hello ${this.name}, your student ID is ${this.studentId}.`;
    }//4
}

const studentInformation = new Student("sayba", 21, 987123); //c+=1
console.log(studentInformation.getStudentId()); // Outputs: 987123



// 4.
console.log(studentInformation.greet()); // Outputs: 987123

//Static Methods and Properties--------------------------------------------------------------
//5.
console.log(Person.genericGreeting());

// 6.
const studentInformation1 = new Student("komal", 21, 987123); //c+=1
console.log(Student.count) //c=2


//Getter and setters--------------------------------------------------------------------------
// 7.
const personFullName=new Person('ERAM ',"kHAN",21)
console.log(personFullName.fullName)


// 8.
const personInstance = new Person("John", "Doe", 30);

// Log the initial full name
console.log(personInstance.fullName); // Outputs: "John Doe"

// Update the name using the setter
personInstance.fullName = "Jane Smith";

// Log the updated full name
console.log(personInstance.fullName); // Outputs: "Jane Smith"


//Private Feield(optional)
// 9.
class Account {
    // Private field for balance
    #balance;

    constructor(initialBalance) {
        // Initialize the balance
        this.#balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else if (amount > this.#balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    // Method to get the current balance
    getBalance() {
        return this.#balance;
    }
}

// Create an instance of Account
const myAccount = new Account(1000);

// Deposit and withdraw money
myAccount.deposit(500);
myAccount.withdraw(200);

// Log the current balance
console.log(`Current Balance: $${myAccount.getBalance()}`); // Outputs: Current Balance: $1300



// 10.
class BankAccount {
    // Private fields for balance, interest rate, and account type
    #balance;
    #interestRate;
    #accountType;

    constructor(initialBalance, interestRate, accountType) {
        this.#balance = initialBalance;
        this.#interestRate = interestRate;
        this.#accountType = accountType;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else if (amount > this.#balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    // Method to apply interest
    applyInterest() {
        const interest = (this.#balance * this.#interestRate) / 100;
        this.#balance += interest;
        console.log(`Applied interest: $${interest.toFixed(2)}`);
    }

    // Method to get the current balance
    getBalance() {
        return this.#balance;
    }

    // Method to get account type
    getAccountType() {
        return this.#accountType;
    }
}

// Create a new BankAccount with initial balance of $2000, interest rate of 5%, and account type 'Savings'
const savingsAccount = new BankAccount(2000, 5, 'Savings');

// Deposit $500
savingsAccount.deposit(500);
console.log(`Current Balance after deposit: $${savingsAccount.getBalance()}`); // Outputs: Current Balance after deposit: $2500

// Withdraw $300
savingsAccount.withdraw(300);
console.log(`Current Balance after withdrawal: $${savingsAccount.getBalance()}`); // Outputs: Current Balance after withdrawal: $2200

// Apply interest
savingsAccount.applyInterest();
console.log(`Current Balance after applying interest: $${savingsAccount.getBalance()}`); // Outputs: Current Balance after applying interest

// Log the account type
console.log(`Account Type: ${savingsAccount.getAccountType()}`); // Outputs: Account Type: Savings
