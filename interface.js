"use strict";
let u = {
    name: "harsh",
    firstVisitedAt: new Date(),
    role: "admin",
};
let u1 = {
    name: "harsh",
    firstVisitedAt: new Date(),
    role: "admin",
    access: ["create post"],
    logName(prefix) {
        console.log(prefix);
        return true;
    }
};
let u2 = {
    name: "Amit",
    firstVisitedAt: new Date(),
    role: "employee"
};
//can't modify the name field because it is readonly!
// u2.name = "harsh";      
// assigning to other interface, we can modify 
// the field of redonly interface
let u3 = u2;
u3.name = "Jay";
let m = {
    harsh: u,
    amit: {
        name: "amit",
        firstVisitedAt: new Date(),
        role: "manager",
    }
};
// can be assign string or a number
let b = "harsh";
