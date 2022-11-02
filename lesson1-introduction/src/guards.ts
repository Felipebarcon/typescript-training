//*****************************************//
//*****************************************//
// GUARDS

interface Bird {
  fly: () => void;
}

interface Whale {
  swim: () => void;
}

function isBird(x: Whale | Bird): x is Bird {
  return (x as Bird).fly !== undefined;
}

function move(a: Bird | Whale) {
  if (isBird(a)) {
    a.fly();
  } else {
    a.swim();
  }
}

function move2(a: Bird | Whale) {
  if ("fly" in a) {
    a.fly();
  } else {
    a.swim();
  }
}

function foo(a: string | number) {
  if (typeof a === "number") {
    a.toFixed();
  }
}

class A {
  getA() {}
}

class B {
  getB() {}
}

const a = new A();
const b = new B();

function bar(a: A | B) {
  if (a instanceof A) {
    a.getA();
  } else {
    a.getB();
  }
}
