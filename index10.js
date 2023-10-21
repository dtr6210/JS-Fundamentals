// Question 10:

// 10. The following constructor function creates a new Person object with the given name and
// age values.







function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    }


// a) Create a new person using the constructor function and store it in a variable

    const person1 = new Person("Randy", "41");

  

// b) Create a second person using different name and age values and store it in a separate
// variable

const person2 = new Person("Justin", "39");



// c) Print out the properties of each person object to the console

console.log(person1);
console.log(person2);

// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.

// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
            }
            canDrive() {
                return this.age >=16
            }
}    

let person3 = new PersonClass('Max', '13');
let person4 = new PersonClass('Timmy', '58');


console.log(person3);
console.log(person4);
console.log(person3.canDrive());
console.log(person4.canDrive());

