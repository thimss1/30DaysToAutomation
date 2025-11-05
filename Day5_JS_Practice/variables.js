// JavaScript Variables Practice - let & cont

console.log("JavaScript Variables Practice");

// Variable using let to hold your name & constr for your favorite color
let myName = "Sonia";
myName = "Sidney"
console.log("My name is: " + myName);

//Changing the let variable
//myName = "Sidney";
//console.log("My name is: " + myName);

// Using const to create a permanent variable
const favoriteColor = "White";
console.log("My favorite color is: " + favoriteColor);

/*Changing constr 
// favoriteColor = "Blue";
// console.log("My favorite color is: " + favoriteColor);*/

// Practice Change #2 (QA Example)
const apppName ="RoadToQA"; //fixed app name
let currentPage = "Login"; //will change
var environment = "Testing"; //legacy variable

currentPage = "Dashboard";
console.log(apppName, currentPage, environment)

// Day 5 Practice - Variables & Data 
const course = "30 Days to Automation";
let testerName = "Sonia";
let isEnrolled = true;
let tools = ["Git", "VS Code", "Playwright"];
let profile = {name: testerName, course, tools: tools};

console.log("Welcome " + testerName + " to " + course);
console.log("Enrolled:", isEnrolled);
console.log("Favorite Tool:", tools[1]);
console.log("Profile:", profile);


