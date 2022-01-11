"use strict";
// function with generics
function display(name, age) {
    console.log(age);
    return name;
}
let uName = display("Harsh", 23);
console.log(uName);
function getItems(items) {
    return new Array().concat(items);
}
let arrNumber = getItems([10, 20, 30]);
let arrString = getItems(["Hello", "JavaTpoint"]);
console.log(arrNumber, arrString);
