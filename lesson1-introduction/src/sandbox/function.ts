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
