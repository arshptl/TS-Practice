// Normal interface declaration and created one instance from that interface
interface User {
    name: string;
    firstVisitedAt: Date;
    role: "admin" | "manager" | "employee";
}

let u: User = {
    name: "harsh",
    firstVisitedAt: new Date(),
    role: "admin",
}


interface UserNew {
    name: string;
    firstVisitedAt: Date;
    role: "admin" | "manager" | "employee";
}

// extends to a new interface (inherits all fields from UserNew interface)
interface AdminUserNew extends UserNew{
    jobTitle?: string,    // optional field
    access: string[],
    role: "admin",
    logName(prefix: string): boolean, // function and the default return type
}

// readonly interface
interface ReadonlyUser{
    readonly name: string;
    readonly firstVisitedAt: Date;
    readonly role: "admin" | "manager" | "employee";
}

let u1: AdminUserNew = {
    name: "harsh",
    firstVisitedAt: new Date(),
    role: "admin",
    access: ["create post"],
    logName(prefix: string) {
        console.log(prefix);
        return true;
    }
}

let u2: ReadonlyUser = {
    name: "Amit",
    firstVisitedAt: new Date(),
    role: "employee"
}

//can't modify the name field because it is readonly!
// u2.name = "harsh";      

// assigning to other interface, we can modify 
// the field of redonly interface
let u3: User = u2;
u3.name = "Jay";


// object to store other objects
interface MapOfUsers {
    [id: string]: User;
}

let m: MapOfUsers = {
    harsh: u,
    amit: {
        name: "amit",
        firstVisitedAt: new Date(),
        role: "manager",

    }
}








