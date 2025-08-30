// Problem-01
// Create an array of numbers and take input from user to add number to this array

// let numbers = [1, 2, 3, 4, 5];
// let userInput = prompt("Enter a number to add to the array:");
// let numberToAdd = Number(userInput);
// numbers.push(numberToAdd);
// console.log("Updated array:", numbers);

// Problem-02
// keep adding numbers to the array in 1 until 0 is added to the array

// let numbers = [1, 2, 3, 4, 5];
// let userInput;
// do {
//     userInput = prompt("Enter a number to add to the array (enter 0 to stop):");
//     let numberToAdd = Number(userInput);
//     if (numberToAdd !== 0) {
//         numbers.push(numberToAdd);
//     }       
// } while (userInput !== "0");
// console.log("Final array:", numbers);

// Problem-03
// filter for numbers divisible by 10 from a given array

// let numbers = [10, 23, 45, 60, 72, 80, 91, 100, 110];
// let divisibleBy10 = numbers.filter(num => num % 10 === 0);
// console.log("Numbers divisible by 10:", divisibleBy10);

// Problem-04
// Create an array of square of given numbers

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(numbers => numbers * numbers);
// console.log("Squares of the numbers:", squares);

// Problem-05

// use reduce to calculate factorial of a given number from an array of first n natural numbers(n being the given whose factorial needs to be calculated)

// let n = 5; // Change this value to calculate factorial of a different number
// let naturalNumbers = Array.from({length: n}, (_,i) => i + 1);
// console.log(naturalNumbers);
// let factorial = naturalNumbers.reduce((acc, num)=> acc * num, 1)
// console.log(`Factorial of ${n} is:`, factorial);