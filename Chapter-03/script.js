// Problem-01
// wirte a program to print  the marks of a student in an object using for loop
let student = {
    john: 85,
    albert: 78,
    tom: 89,
    harry: 90,
    sam: 67
};

// for(let i = 0; i < Object.keys(student).length; i++){
//     let key = Object.keys(student)[i];
//     console.log(`Marks of ${key} is ${student[key]}`);
// }

// Problem-02

//write a program Q-1 using for in loop
// for(let key in student){
//     console.log(`Marks of ${key} is ${student[key]}`);
// }

// Problem-03
// Write a program to print 'try again' untel the user enters the correct number
// let correctNumber = 7;
// let userInput;

// do{
//     userInput = Number.parseInt(prompt("Enter a number between 1 to 10"));
//     if(userInput === correctNumber){
//         console.log("You have entered the correct number");
//         break;
//     }
// }while(true);

// Problem-04
//write a function to find mean of 5 numbers

// const mean = (...numbers) => {
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum / numbers.length;
// }

// console.log(mean(1, 2, 3, 4, 5));
// console.log(mean(10, 20, 30, 40, 50));