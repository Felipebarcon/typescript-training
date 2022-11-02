//*****************************************//
//*****************************************//
// TYPES GENERIQUES

const arr: Array<string> = ["pommes", "fraises", "tomates"];

const fruit = arr[0];

interface User {
  username: string;
}

const promise: Promise<User> = new Promise((resolve, reject) => {
  resolve({ username: "Jean" });
});

promise.then((res) => {
  res.username;
});

//*****************************************//
//*****************************************//
// FONCTIONS ET TYPES GENERIQUES

interface Fruit {
  name: string;
  price: number;
}

interface Car {
  speed: number;
}

const newCar: Car = { speed: 50 };

const newFruit: Fruit = {
  name: "banana",
  price: 1,
};

interface AddItemFunction {
  <T>(item: T, collection: T[]): T[];
}

const addItemToCollection: AddItemFunction = <T>(
  item: T,
  collection: T[]
): T[] => {
  return [...collection, item];
};

const myFruits = addItemToCollection(newFruit, []);
const myCars = addItemToCollection(newCar, []);

// console.log(myFruits[0].price);
// console.log(myCars[0].speed);

//*****************************************//
//*****************************************//
// CLASSE ET TYPES GENERIQUES

class Stack<T> {
  items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T {
    return this.items.pop();
  }

  display(): void {
    console.log(this.items);
  }
}

const newStackNumber = new Stack<number>();
newStackNumber.push(1);
newStackNumber.display();
newStackNumber.push(2);
newStackNumber.display();
const myNumber = newStackNumber.pop();
newStackNumber.display();
console.log(myNumber);

const newStackString = new Stack<string>();
newStackString.push("hello");
newStackString.display();
newStackString.push("world");
newStackString.display();
const myString = newStackString.pop();
newStackString.display();
console.log(myString);
