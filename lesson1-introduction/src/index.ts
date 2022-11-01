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
