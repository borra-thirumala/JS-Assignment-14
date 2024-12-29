//square numbers:.Write a function squareNumbers(arr) that returns a new array where each number in the original array
//  is squared using map method.

function squareNumbers(arr) {
    return arr.map(num => num * num);
}
const numbers = [1, 2, 3, 4,5,81,10];
console.log(squareNumbers(numbers)); 

//Write a function toUppercase(arr) that returns a new array where each string in the original array 
// is converted to uppercase using map method.

function toUppercase(arr) {
    return arr.map(str => str.toUpperCase());
}
const strings = ["hello", "world", "javascript"];
console.log(toUppercase(strings)); 
