// Question 9:

// 9. Use the following variables to understand how JavaScript stores objects by reference.

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)

// let moreSports = teamSports;
// moreSports.push('Basketball')
// moreSports.push('Golf')
// moreSports.unshift('Cornhole')
// moreSports.unshift('Bowling')

// console.log(teamSports)

// b) Create a new dog2 variable equal to dog1 and give it a new value

// let dog2 = dog1;
// dog2 = 'Sid';

// console.log(dog1)

// c) Create a new cat2 variable equal to cat1 and change its name property

// let cat2 = cat1;
// cat2.name = 'Mr. Black Cat'

// console.log(cat1)

// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?

// console.log(teamSports) - 
// console.log(dog1)
// console.log(cat1)

// teamSports and cat1 changed.  this is because we changed the properties of those objects.
// dog1 did not change because these are primitive values and not objects.

// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

let moreSports = [...teamSports];
moreSports.push('Basketball');
moreSports.push('Golf');
moreSports.unshift('Cornhole');
moreSports.unshift('Bowling');

let cat2 = {...cat1};
cat2.name = "Mr. Black Cat"
cat2.breed = "Crazy"

console.log(teamSports);
console.log(moreSports);
console.log(cat1);
console.log(cat2);








