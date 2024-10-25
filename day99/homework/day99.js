class Car {
    constructor(make, model) {
        this.make = make; // Public property for the car's make
        this.model = model; // Public property for the car's model
    }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Camry");

// Access the public properties
console.log(`Make: ${myCar.make}`);
console.log(`Model: ${myCar.model}`);




class BankAccount {
    #balance; 

    constructor(initialBalance = 0) {
        this.#balance = initialBalance; 
    }


    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Withdrawal amount must be positive and cannot exceed the current balance.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);    
myAccount.withdraw(30);   
console.log(`Current balance: $${myAccount.getBalance()}`); 






class MathOperations {
    static PI = 3.14159;

    static add(a, b) {
        return a + b;
    }
}

const sum = MathOperations.add(5, 3);
console.log(`Sum: ${sum}`);
console.log(`Value of PI: ${MathOperations.PI}`);








class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set dimensions({ width, height }) {
        if (width > 0 && height > 0) {
            this.width = width;
            this.height = height;
        } else {
            throw new Error('Width and height must be positive numbers.');
        }
    }
}







class User {
    #password;

    set password(newPassword) {
        if (this.#validatePassword(newPassword)) {
            this.#password = newPassword;
        } else {
            throw new Error('Password is not strong enough.');
        }
    }

    #validatePassword(password) {
        return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
    }
}













class Book {
    #pages;

    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    get pages() {
        return this.#pages;
    }

    set pages(value) {
        if (value > 0) {
            this.#pages = value;
        } else {
            throw new Error('Number of pages must be positive.');
        }
    }
}









class Player {
    static playerCount = 0;

    constructor(name) {
        this.name = name;
        Player.playerCount++;
    }

    static getPlayerCount() {
        return Player.playerCount;
    }
}





class Vehicle {
    #speed;

    constructor(speed) {
        this.#speed = speed;
    }

    setSpeed(newSpeed) {
        if (newSpeed >= 0) {
            this.#speed = newSpeed;
        } else {
            throw new Error('Speed must be a non-negative number.');
        }
    }

    getSpeed() {
        return this.#speed;
    }
}

class Bike extends Vehicle {
    constructor(speed) {
        super(speed);
    }

    increaseSpeed(amount) {
        this.setSpeed(this.getSpeed() + amount);
    }

    decreaseSpeed








    class Student {
        constructor(name, grade) {
            this.name = name;
            this.grade = grade;
        }
    
        static compareGrades(student1, student2) {
            if (!(student1 instanceof Student) || !(student2 instanceof Student)) {
                throw new Error('Both arguments must be instances of Student.');
            }
            
            if (student1.grade > student2.grade) {
                return `${student1.name} has a higher grade than ${student2.name}.`;
            } else if (student1.grade < student2.grade) {
                return `${student2.name} has a higher grade than ${student1.name}.`;
            } else {
                return `${student1.name} and ${student2.name} have the same grade.`;
            }
        }
    }