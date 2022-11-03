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
//# sourceMappingURL=function.js.map