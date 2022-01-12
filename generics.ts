// function with generics
function display<T, U>(name: T, age: U) : T {
    console.log(age)
    return name;
}

let uName: string = display("Harsh", 23)

console.log(uName)


function getItems<T>(items : T[] ) : T[] {  
    return new Array<T>().concat(items);  
}  
let arrNumber = getItems<number>([10, 20, 30]);  
let arrString = getItems<string>(["Hello", "JavaTpoint"]);  

console.log(arrNumber, arrString)