"use strict";
// string variable
let foo = "Amit";
// two different ways to define array
let arraylist = ["amit", "harsh", "jay", "utsav", "smit"];
let arrayNewList = ["amit", "harsh", "jay", "utsav", "smit"];
// touples
let strudentScrores = ["harsh", 34];
let allstrudentScrores = [
    ["harsh", 34],
    ["amit", 45],
];
// creating multiple objects through object templates/declaration
let player = {
    x: 0,
    y: 0,
    health: 100,
};
let player2 = {
    x: 0,
    y: 0,
    health: 100,
};
// extra type
// let element: HTMLElement | null = document.getElementById("content");
let obj = player;
// declaing variable using "any" type. 
// can be change the type after initialization also
let something = 1;
something = player;
something = "1";
console.log(foo);
