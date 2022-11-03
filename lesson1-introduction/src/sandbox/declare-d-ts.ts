//*****************************************//
//*****************************************//
// DECLARE

declare const Swal: any;

setTimeout(() => {
  Swal.fire("Good job!", "You clicked the button!", "success");
}, 3000);

//*****************************************//
//*****************************************//
// TYPES .d.ts

import * as $ from "jquery";

const myh1 = $("h1");

myh1.click((event) => {
  alert("Hello");
});

console.log(myh1);

//*****************************************//
//*****************************************//
// CREER SES PROPRES TYPES

import { add } from "mylib/add";

console.log(add(1, 2));
