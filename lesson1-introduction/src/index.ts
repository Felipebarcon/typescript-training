let foo: string = "une string";
let bar: number = 5;
let boolean: boolean = true;

const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
const tuple: [number, number] = [1, 2];

enum Role {
  ADMIN,
  READ_ONLY,
  READ_WRITE,
}

console.log(Role.ADMIN);

let username: any;
username = "Jean";
const nbr: number = (username as string).length;

//*****************************************//
//*****************************************//
// FUNCTIONS

function add(nbr1: number, nbr2: number): number {
  return nbr1 + nbr2;
}

console.log(add(1, 2));

// Typer une fonction avant sa déclaration
let add1: (nbr1: number, nbr2: number) => number;
let add2: Function;

add1 = (a: number, b?: number) => {
  return a + b;
};

console.log(add1(5, 2));

console.log("********************************");

let add3 = (...numbers: Array<number>) => {
  return numbers.reduce((acc, i) => {
    console.log(i);
    acc += i;
    return acc;
  }, 0);
};

console.log("***********TOTAL**************");

console.log(add3(1, 2, 3, 4));

function add4(a, b): string | number {
  return a + b;
}

function add5(a: number, b: number): number;
function add5(a: string, b: string): string;
function add5(a, b): string | number {
  return a + b;
}
const res1 = add5(1, 2);
const res2 = add5("hello ", "world");

res2.split("");
console.log(res2.length);

//*****************************************//
//*****************************************//
// CLASSES

abstract class Engine {
  constructor(protected type: string) {}

  abstract stopEngine(): number;
}

// const engine: Engine = new Engine();

class Vehicule extends Engine {
  wheel = 4;
  protected brand: string;

  constructor(brand: string) {
    super("v8");
    this.brand = brand;
  }

  stopEngine() {
    console.log("Stop engine");
    return 0;
  }
}

class Voiture extends Vehicule {
  static className = "Vehicule";
  private maxSpeed: number = 220;
  readonly airbag: boolean;

  constructor(public speed: number) {
    super("Porsche");
    this.airbag = true;
  }

  static startCar() {
    console.log("Car can start");
  }

  move(): void {
    console.log("car move");
  }

  faster(newSpeed: number): void {
    if (newSpeed < this.maxSpeed) {
      this.speed = newSpeed;
    }
  }

  stop(): void {
    console.log("car stop");
  }

  changeBrand(newBrand: string): void {
    this.brand = newBrand;
  }
}

let car: Voiture;

car = new Voiture(80);

console.log(car.speed);
console.log(car.wheel);
console.log(car);
console.log(Voiture.className);
console.log(Voiture.startCar());

//*****************************************//
//*****************************************//
// INTERFACE

console.log("-------------------------INTERFACE-------------------------");

interface User {
  readonly username: string;
  age: number;
  isDrinking?: boolean;
  isHealthy?: boolean;
  isSmoking?: boolean;
}

const ids: readonly string[] = ["1", "2", "3"];
// ids.push("4");

const user: User = {
  username: "Jean",
  age: 30,
  isDrinking: true,
  isSmoking: true,
  isHealthy: false,
};

const newUser: User = {
  username: "Paul",
  age: 50,
};

function greet(user: User): void {
  console.log(`Hello ${user.username}`);
}

function death(user: User) {}

function goodShape(user: User) {}

greet(user);
