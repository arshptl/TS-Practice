
// string variable
let foo: string = "Amit";
// two different ways to define array
let arraylist: string[] = ["amit", "harsh", "jay", "utsav", "smit"];
let arrayNewList: Array<string> = ["amit", "harsh", "jay", "utsav", "smit"];

// touples
let strudentScrores: [string, number] = ["harsh", 34];
let allstrudentScrores: [string, number][] = [
  ["harsh", 34],
  ["amit", 45],
];

// two ways to declare objects
type Coach = {
  x: number;
  y: number;
  health: number;
};

interface Player {
  x: number;
  y: number;
  health: number;
}

// creating multiple objects through object templates/declaration
let player: Player = {
  x: 0,
  y: 0,
  health: 100,
};

let player2: Player = {
  x: 0,
  y: 0,
  health: 100,
};

// extra type
// let element: HTMLElement | null = document.getElementById("content");

let obj: object = player;

// declaing variable using "any" type. 
// can be change the type after initialization also
let something: any = 1;
something = player;
something = "1";

console.log(foo);
