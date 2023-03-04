"use strict";
//Task1
let objectUser = {};
objectUser.name = "John";
objectUser.surname = "Smith";
objectUser.name = "Pete";
delete objectUser.name;
console.log(objectUser);

//Task2
 const user = {
    name: "John"
}
user.name = "Pete";
console.log(user);

//Task3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum;
sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);
