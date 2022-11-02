var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var foo = "une string";
var bar = 5;
var boolean = true;
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
var tuple = [1, 2];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["READ_WRITE"] = 2] = "READ_WRITE";
})(Role || (Role = {}));
console.log(Role.ADMIN);
var username;
username = "Jean";
var nbr = username.length;
//*****************************************//
//*****************************************//
// FUNCTIONS
function add(nbr1, nbr2) {
    return nbr1 + nbr2;
}
console.log(add(1, 2));
// Typer une fonction avant sa déclaration
var add1;
var add2;
add1 = function (a, b) {
    return a + b;
};
console.log(add1(5, 2));
console.log("********************************");
var add3 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, i) {
        console.log(i);
        acc += i;
        return acc;
    }, 0);
};
console.log("***********TOTAL**************");
console.log(add3(1, 2, 3, 4));
function add4(a, b) {
    return a + b;
}
function add5(a, b) {
    return a + b;
}
var res1 = add5(1, 2);
var res2 = add5("hello ", "world");
res2.split("");
console.log(res2.length);
//*****************************************//
//*****************************************//
// CLASSES
var Engine = /** @class */ (function () {
    function Engine(type) {
        this.type = type;
    }
    return Engine;
}());
// const engine: Engine = new Engine();
var Vehicule = /** @class */ (function (_super) {
    __extends(Vehicule, _super);
    function Vehicule(brand) {
        var _this = _super.call(this, "v8") || this;
        _this.wheel = 4;
        _this.brand = brand;
        return _this;
    }
    Vehicule.prototype.stopEngine = function () {
        console.log("Stop engine");
        return 0;
    };
    return Vehicule;
}(Engine));
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture(speed) {
        var _this = _super.call(this, "Porsche") || this;
        _this.speed = speed;
        _this.maxSpeed = 220;
        _this.airbag = true;
        return _this;
    }
    Voiture.startCar = function () {
        console.log("Car can start");
    };
    Voiture.prototype.move = function () {
        console.log("car move");
    };
    Voiture.prototype.faster = function (newSpeed) {
        if (newSpeed < this.maxSpeed) {
            this.speed = newSpeed;
        }
    };
    Voiture.prototype.stop = function () {
        console.log("car stop");
    };
    Voiture.prototype.changeBrand = function (newBrand) {
        this.brand = newBrand;
    };
    Voiture.className = "Vehicule";
    return Voiture;
}(Vehicule));
var car;
car = new Voiture(80);
console.log(car.speed);
console.log(car.wheel);
console.log(car);
console.log(Voiture.className);
console.log(Voiture.startCar());
//*****************************************//
//*****************************************//
// INTERFACE
console.log("-------------------------INTERFACE-------------------------");
var user = {
    username: "Jean",
    age: 30,
    isDrinking: true,
    isSmoking: true,
    isHealthy: false
};
function greet(user) {
    console.log("Hello ".concat(user.username));
}
function death(user) { }
function goodShape(user) { }
greet(user);
