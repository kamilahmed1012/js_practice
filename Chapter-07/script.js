// Problem 01
//create a nav-bar and change the color of its first element to red

// const navBar = document.getElementById("nav").firstElementChild.firstElementChild.style.color = "red"; // Accessing the first <li> element and changing its color to red


// const firstElement = navBar.querySelector("li");
// firstElement.style.color = "red"; // Changing the color of the first <li> element to red

// Problem 02
//create a table without tbody.now use 'view page source' to check if tbody is added or not

// Answer: Yes, the browser automatically adds a <tbody> element to the table if it is not present in the HTML markup. This is done to ensure that the table structure is valid and consistent across different browsers.

// Problem 03
//create an element with 3 children. Now change the color of first and last element to green

// const navBar = document.getElementById("nav");
// const firstChild = navBar.firstElementChild.firstElementChild;
// const lastChild = navBar.firstElementChild.lastElementChild;

// firstChild.style.color = "red";
// lastChild.style.color = "green";

// Problem 04
// write a javaScript code to change background color off all li tags to cyan

// const listItems = document.querySelectorAll("li");
// listItems.forEach(Items=> {
//     Items.style.backgroundColor = 'green';
// })