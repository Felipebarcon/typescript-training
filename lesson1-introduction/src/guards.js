//*****************************************//
//*****************************************//
// GUARDS
function isBird(x) {
    return x.fly !== undefined;
}
function move(a) {
    if (isBird(a)) {
        a.fly();
    }
    else {
        a.swim();
    }
}
function move2(a) {
    if ("fly" in a) {
        a.fly();
    }
    else {
        a.swim();
    }
}
function foo(a) {
    if (typeof a === "number") {
        a.toFixed();
    }
}
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.getA = function () { };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.getB = function () { };
    return B;
}());
var a = new A();
var b = new B();
function bar(a) {
    if (a instanceof A) {
        a.getA();
    }
    else {
        a.getB();
    }
}
//# sourceMappingURL=guards.js.map