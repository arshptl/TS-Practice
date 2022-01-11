// any type(top level type)
let myAny: any = 32;
let myUnknown: unknown = "Hello, unknown";

// we can do whatever we wanted to do with them
myAny = "harsh";
myUnknown = 34;

// good scenario to use any
async function logWhenReady(p: Promise<any>) {
    const val = await p;
    console.log("Resolved to: ", val);
}


// guards
function isDefined<T>(arg: T | undefined): arg is T{
    return typeof arg !== "undefined";
}

let ans = isDefined("Hello");

console.log(ans);

// can be assign unknown with other unknown veriable
let aa: unknown = 31;
let bb: unknown = ["a", "b", "c"];

aa = bb;

 