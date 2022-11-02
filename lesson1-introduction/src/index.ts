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

console.log(myFruits[0].price);
console.log(myCars[0].speed);
