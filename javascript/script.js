"use strict";
//Task1
const objectUser = {};
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
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);
