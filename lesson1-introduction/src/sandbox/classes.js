//*****************************************//
//*****************************************//
// CLASSES
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
//# sourceMappingURL=classes.js.map