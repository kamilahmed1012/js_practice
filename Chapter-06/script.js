// Problem-01
// write a program using prompt  function to take input of age as a value from user and use alert to tell him if he can drive or not
// let userInput = prompt("Enter your age:");
// let age = Number(userInput);
// if (age >= 18) {
//     alert("You can drive");
// }else {
//     alert("You cannot drive");
// }

// Problem-02
// In Q-1 use comfirm function to ask user if he wants to see the prompt again
// let userWantsToContinue = true;
// while(userWantsToContinue) {
//     let userInput = prompt("Enter your age:");
//     let age = Number(userInput);  
//     if (age >= 18) {
//         alert("You can drive");
//     }else {
//         alert("You cannot drive");
//     }
//     userWantsToContinue = confirm("Do you want to continue?");
// }

// Problem-03
// In the previous question use console.log error if the age enterd is negative

// let userWantsToContinue = true;
// while(userWantsToContinue) {
//     let userInput = prompt("Enter your age:");
//     let age = Number(userInput); 
//     if(age <= 0){
//         console.error('Invalid age entered. Age cannot be negative or zero.');
//         break;
//     } 
//     if (age >= 18) {
//         alert("You can drive");
//     }else {
//         alert("You cannot drive");
//     }
//     userWantsToContinue = confirm("Do you want to continue?");
// }

// Problem-04
// write a program to change the url to google.com (Redirection) if user enter a number greater than 4

// let userInput = prompt("Enter a number:");
// let number = Number(userInput);
// if (number > 4) {
//     window.location.href = "https://www.google.com";
// }

// Problem-05

// change the background color of the page to yellow red or any other color based on user input through prompt
// let userInput = prompt("Enter a color (e.g., yellow, red, blue):");
// document.body.style.backgroundColor = userInput;