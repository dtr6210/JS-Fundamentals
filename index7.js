// Question 7:

// 7. The following object represents a basketball game and keeps track of the score as the
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works

// b) Add a new method to print the full time final score

// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages

// d) Test your object by chaining all the method calls together in different combinations.

// Original:

// const basketballGame = {
//   score: 0,
//   freeThrow() {
//     this.score++;
//   },
//   basket() {
//     this.score += 2;
//   },
//   threePointer() {
//     this.score += 3;
//   },
//   halfTime() {
//     console.log("Halftime score is " + this.score);
//   },
// };

//modify each of the above object methods to enable function chaining as below:
// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

const basketballGame = {
  score: 0,
  fouls: 0, // C) added method to track fouls

  freeThrow() {
    this.score++;
    return this; // a) if we return it, we can 'chain' object methods together
  },
  basket() {
    this.score += 2;
    return this; // a) if we return it, we can 'chain' object methods together
  },
  foul() {
    this.fouls ++; // c) method to increment fouls
    return this;
  },
  threePointer() {
    this.score += 3;
    return this; // a) if we return it, we can 'chain' object methods together
  },

  halfTime() {
    console.log("Halftime score is " + this.score);
    return this; // a) if we return it, we can 'chain' object methods together
  },

  halfTimeFouls() { // c) method to increment fouls
    console.log("Halftime foul count is " + this.fouls);
    return this; 
  },

  fullTime() {  // b) new method to print full time score
    console.log("Fulltime final score is " + this.score);
    return this;
  },

  fullTimeFouls() { // c) method to increment fouls
    console.log("Fulltime foul count is " + this.fouls);
    return this; 
  },
};

console.log(basketballGame.basket() // d) chaning together with different combinations.
.foul()
.freeThrow()
.freeThrow()
.basket()
.basket()
.foul()
.freeThrow()
.threePointer()
.threePointer()
.basket()
.halfTimeFouls()
.halfTime()
.foul()
.freeThrow()
.foul()
.freeThrow()
.freeThrow()
.basket()
.basket()
.basket()
.threePointer()
.fullTimeFouls()
.fullTime());


