//*****************************************//
//*****************************************//
// INTERFACE ET CLASSES
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
var Player = /** @class */ (function () {
    function Player(isPlaying) {
        this.isPlaying = isPlaying;
    }
    return Player;
}());
var Mp3Player = /** @class */ (function (_super) {
    __extends(Mp3Player, _super);
    function Mp3Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mp3Player.prototype.play = function () { };
    return Mp3Player;
}(Player));
var userStatus = "online";
var value;
var myVehicule = {
    type: "truck",
    seat: 4,
    load: function (amount) { },
    drive: function () { },
};
function vehiculeFactory(type) {
    if (type == 1) {
        return {
            type: "car",
            seat: 4,
            drive: function () { },
        };
    }
    else {
        return {
            type: "truck",
            seat: 2,
            load: function (amount) { },
            drive: function () { },
        };
    }
}
var foo = vehiculeFactory(2);
if (foo.type === "truck") {
    foo.load(123);
}
function startTrip(v) {
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
//# sourceMappingURL=interface-classes.js.map