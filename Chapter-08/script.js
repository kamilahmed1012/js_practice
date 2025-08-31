// Quize

// let sum = (a, b) => {
//     return a + b
// }

// let setTimer = setInterval(() => {
//     console.log(sum(1,2));
// },1000)

// Problem 01

// write a program to show different alerts when button are clicked (completed in html file)

// Problem 02 - 03

// create a website is capable of storing bookmarks of your favorite website using href


// const google = document.getElementById('google');
// const yt = document.getElementById('yt');
// const fiverr = document.getElementById('fiverr');

// google.addEventListener('click', () => {
//     let url = 'https://www.google.com/';
//     window.location = url;
    
// })
// yt.addEventListener('click', () => {
//     let url = 'https://www.youtube.com/';
//     window.location = url;
// })
// fiverr.addEventListener('click', () => {
//     let url = 'https://www.fiverr.com/';
//     window.location = url;
// })

// Problem 04
// write a javascript program to keep fetching content of a website (every 5 seconds)

// setInterval(async () =>{
//     let url = 'https://jsonplaceholder.typicode.com/todos/1';
//     console.log(await fetch(url))}, 5000);

// Problem 05

//Create a glowing bulb effect using classlist toggle method.

setInterval(async function(){
    document.querySelector('#bulb').classList.toggle('bulb')
}, 300)