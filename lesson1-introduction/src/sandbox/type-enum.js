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
//# sourceMappingURL=type-enum.js.map