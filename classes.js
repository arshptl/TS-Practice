"use strict";
class Playerr {
    constructor(name) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.name = name;
    }
    display(prefix) {
        console.log(prefix +
            "Player " +
            this.name +
            " is at (" +
            this.x +
            ", " +
            this.y +
            " )");
    }
}
let p = new Playerr("Harsh");
p.x = 1;
p.display("=== ");
let p2 = new Playerr("Smit");
p2.display("--- ");
let objects = [p, p2];
