"use strict";
//*****************************************//
//*****************************************//
// TYPES GENERIQUES
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var arr = ["pommes", "fraises", "tomates"];
var fruit = arr[0];
var newCar = { speed: 50 };
var newFruit = {
    name: "banana",
    price: 1,
};
var addItemToCollection = function (item, collection) {
    return __spreadArray(__spreadArray([], collection, true), [item], false);
};
var myFruits = addItemToCollection(newFruit, []);
var myCars = addItemToCollection(newCar, []);
// console.log(myFruits[0].price);
// console.log(myCars[0].speed);
//*****************************************//
//*****************************************//
// CLASSE ET TYPES GENERIQUES
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.display = function () {
        console.log(this.items);
    };
    return Stack;
}());
var newStackNumber = new Stack();
newStackNumber.push(1);
newStackNumber.display();
newStackNumber.push(2);
newStackNumber.display();
var myNumber = newStackNumber.pop();
newStackNumber.display();
console.log(myNumber);
var newStackString = new Stack();
newStackString.push("hello");
newStackString.display();
newStackString.push("world");
newStackString.display();
var myString = newStackString.pop();
newStackString.display();
console.log(myString);
function displayName(object) {
    console.log(object.name);
}
function displayProp(object, prop) {
    console.log(object[prop]);
}
displayProp({ price: 50 }, "price");
//*****************************************//
//*****************************************//
// COLLECTIONS ET TYPES GENERIQUES
// interface User {
//   username: string;
// }
// const newUser: Readonly<User> = {
//   username: "Jean",
// };
// newUser.username = "Louis";
// interface User {
//   username: string;
//   age: number;
//   address: {
//     city: string;
//   };
// }
//
var newUser = {
    username: "Jean",
    age: 12,
    address: {
        city: "Ville-la-Grand",
    },
};
function editUser(user, editedUser) {
    return __assign(__assign({}, user), editedUser);
}
editUser(newUser, { age: 20 });
var pages = {
    home: {
        title: "homepage",
    },
    about: {
        title: "about",
    },
    contact: {
        title: "about",
    },
};
//# sourceMappingURL=index.js.map