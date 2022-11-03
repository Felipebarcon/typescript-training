const h1 = document.querySelector("h1");

const img = document.querySelector("img");

//*****************************************//
//*****************************************//
// TYPE MAPPE

interface Person {
  username: string;
  age: number;
}

interface Car {
  wheels: number;
}

type MyPartialPerson = { [P in keyof Person]?: Person[P] };

type MyPartial<T> = { [P in keyof T]?: T[P] };

const user: Person = {
  username: "jean",
};

const user2: MyPartialPerson = {
  username: "jean",
};

const user3: MyPartial<Person> = {
  age: 39,
};

const car: MyPartial<Car> = {
  wheels: 4,
};

//*****************************************//
//*****************************************//
// TYPE CONDITIONNELS
