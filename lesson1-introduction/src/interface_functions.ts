// INTERFACE

console.log("-------------------------INTERFACE-------------------------");

interface User {
  readonly username: string;
  age: number;
  isDrinking?: boolean;
  isHealthy?: boolean;
  isSmoking?: boolean;
  [propName: string | number]: any;
}

const ids: readonly string[] = ["1", "2", "3"];
// ids.push("4");

const user: User = {
  username: "Jean",
  age: 30,
  isDrinking: true,
  isSmoking: true,
  isHealthy: false,
  1: true,
};

const newUser: User = {
  username: "Paul",
  age: 50,
  isOnline: true,
  isOffline: false,
};

function greet(user: User): void {
  console.log(`Hello ${user.username}`);
}

function death(user: User) {}

function goodShape(user: User) {}

greet(user);


// INTERFACE ET FUNCTION

let func: (param: string) => number;

interface MyFunc {
  (param: string): number;
}

const func2: MyFunc = (x) => {
  return 0;
};

interface Bus {
  name: string;
  drive: () => void;
}