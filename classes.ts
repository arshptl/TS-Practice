interface GameObject {
  x: number;
  y: number;
  z: number;
}

class Playerr implements GameObject {
  name: string;
  x: number = 0;
  y: number = 0;
  z: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  display(prefix: string): void {
    console.log(
      prefix +
        "Player " +
        this.name +
        " is at (" +
        this.x +
        ", " +
        this.y +
        " )"
    );
  }
}

let p = new Playerr("Harsh");
p.x = 1;
p.display("=== ");

let p2 = new Playerr("Smit");
p2.display("--- ");

let objects: GameObject[] = [p, p2];
