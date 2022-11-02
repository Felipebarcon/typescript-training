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
