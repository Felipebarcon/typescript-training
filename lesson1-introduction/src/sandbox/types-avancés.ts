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

// interface Lengthy {
//   length: number;
// }
//
// function func<T extends Lengthy>(x: T) {
//   return x.length;
// }

declare function f<T>(x: T): T extends string ? string : boolean;

f(1);
f("test");

type MyType = Exclude<"a" | "b", "a">;

type MyExcludeType<T, U> = T extends U ? never : T;

type MyType2 = MyExcludeType<"a" | "b", "a">;

type MyType3 = Extract<"a" | "b", "a">;

type MyExtractType<T, U> = T extends U ? never : T;

//*****************************************//
//*****************************************//
// INFER

interface Func {
  (tests: string, tests2: number): boolean;
}

type MyReturnValueType<T> = T extends (...args: any[]) => infer FunctionReturn
  ? FunctionReturn
  : any;

type FuncReturnType = MyReturnValueType<Func>;

type MyFunctionsParametersType<T> = T extends (...args: infer Parameters) => any
  ? Parameters
  : void;

type MyParameters = MyFunctionsParametersType<Func>;
