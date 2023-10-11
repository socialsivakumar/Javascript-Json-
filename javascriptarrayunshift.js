// create an array with some initial values
var myArray = [1, 2, 3, 4, 5];

// add a new element to the beginning of the array
myArray.unshift(0);
console.log(myArray); // [0, 1, 2, 3, 4, 5]

// add multiple elements to the beginning of the array
myArray.unshift(-2, -1);
console.log(myArray); // [-2, -1, 0, 1, 2, 3, 4, 5]
