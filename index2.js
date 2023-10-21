// Question 2:

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we
// fix them?

// let three = "3"
// let four = "4"
// let thirty = "30"

//what is the value of the following expressions?

// let addition = three + four
// Not givinig correct answer.  This will result in 34.  Implicit conversion does not happen when using + with two or more operands,
// as JS can and will add two strings by concatenating them.

// let multiplication = three * four
// this results to 12.  Implicit conversion happens when using division /, multiplication *
// subtraction -, or unary plus +, and JS automatically converts strings to
// numbers in order to perform the operation.

// let division = three / four
// the value is .75.  Implicit conversion happens when using division /, multiplication *
// subtraction -, or unary plus +, and JS automatically converts strings to
// numbers in order to perform the operation.

// let subtraction = three - four
// This results in -1.  Implicit conversion happens when using division /, multiplication *
// subtraction -, or unary plus +, and JS automatically converts strings to
// numbers in order to perform the operation.

// let lessThan1 = three < four
// this results in True.  This is because javascript uses the so called dictionary or lexicographical order.
// Strings are compared letter by letter.  The first letters were compared and 3 is less than 4.

// let lessThan2 = thirty < four
// Not giving the correct answer because this results in True.  This is because javascript uses the so called dictionary or lexicographical order.
// Strings are compared letter by letter.  The first letters were compared and 3 is less than 4.

// To fix the errors encountered about we can use unary plus as shown below.  This will convert the strings to numberical values.

// let three = (+"3")
// let four = (+"4")
// let thirty = (+"30")

// console.log(addition)
// console.log(multiplication)
// console.log(division)
// console.log(subtraction)
// console.log(lessThan1)
// console.log(lessThan2)