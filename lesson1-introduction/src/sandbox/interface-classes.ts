//*****************************************//
//*****************************************//
// INTERFACE ET CLASSES

interface Vehicule {
  name: string;
  drive: () => void;
}

interface Engine {
  // @ts-ignore
  type: string;
}

// interface Car extends Vehicule, Engine {
//   wheels: number;
// }

// class Car implements Vehicule, Engine {
//   drive() {}
//   constructor(
//     public name: string,
//     public type: string,
//     public wheels: number
//   ) {}
// }

class Player {
  constructor(private isPlaying: boolean) {}
}

interface PlayerBasic extends Player {
  play: () => void;
}

class Mp3Player extends Player implements PlayerBasic {
  play() {}
}

let userStatus: "online" | "offline" | "busy" = "online";

let value: number | string;

interface Car {
  type: "car";
  seat: number;
  drive: () => void;
}

interface Truck {
  type: "truck";
  seat: number;
  load: (amount: number) => void;
  drive: () => void;
}

const myVehicule: Car | Truck = {
  type: "truck",
  seat: 4,
  load: (amount: number): void => {},
  drive: () => {},
};

function vehiculeFactory(type: 1 | 2): Car | Truck {
  if (type == 1) {
    return {
      type: "car",
      seat: 4,
      drive: () => {},
    };
  } else {
    return {
      type: "truck",
      seat: 2,
      load: (amount: number): void => {},
      drive: () => {},
    };
  }
}

const foo2 = vehiculeFactory(2);

if (foo.type === "truck") {
  foo.load(123);
}

function startTrip(v: Car | Truck) {
  switch (v.type) {
    case "car": {
      v.drive();
      break;
    }
    case "truck": {
      v.drive();
      v.load(123);
    }
  }
}
