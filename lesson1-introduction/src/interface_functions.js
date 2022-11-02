// INTERFACE
console.log("-------------------------INTERFACE-------------------------");
var ids = ["1", "2", "3"];
// ids.push("4");
var user = {
    username: "Jean",
    age: 30,
    isDrinking: true,
    isSmoking: true,
    isHealthy: false,
    1: true,
};
var newUser = {
    username: "Paul",
    age: 50,
    isOnline: true,
    isOffline: false,
};
function greet(user) {
    console.log("Hello ".concat(user.username));
}
function death(user) { }
function goodShape(user) { }
greet(user);
// INTERFACE ET FUNCTION
var func;
var func2 = function (x) {
    return 0;
};
//# sourceMappingURL=interface_functions.js.map