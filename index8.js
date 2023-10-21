// Question 8:

// 8. The object below represents a single city.

// a) Write a function that takes an object as an argument and uses a for…in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.

// b) Create a new object for a different city with different properties and call your function
// again with the new object.

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

// part a:

for (let property in sydney) {
  console.log('sydney: ', property, sydney[property])
}

// part b:
const batonrouge = {
  name: "Baton Rouge",
  population: 222_185,
  parish: "East Baton Rouge",
  state: "Louisiana",
  mayor: "Sharon Weston Broome",
  founded: "16 January 1817",
  timezone: "Central Daylight Time",
};

for (let property in batonrouge) {
  console.log('Baton Rouge: ', property, batonrouge[property] )
}
