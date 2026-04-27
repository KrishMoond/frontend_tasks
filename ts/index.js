"use strict";
// // // // // // // // 1. Basic Types (Primitives)
// // // // // // // // You can explicitly state what type of data a variable holds using a colon `:`
// // // // // // // let isDone: boolean = false;
// // // // // // // let age: number = 23;
// // let userName: string = "Krish";
const myPerson = {
    name: "Alice",
    age: 28
};
console.log(myPerson.name);
let currentStatus = "active";
const myFirstCar = {
    brand: "Toyota",
    model: "Corolla"
};
const mySecondCar = {
    brand: "Honda",
    model: "Civic"
};
const user1 = {
    id: 101,
    username: "johndoe",
    email: "john@example.com",
    isActive: true
};
const user2 = {
    id: 102,
    username: "janedoe",
    email: "jane@example.com"
};
//create a funxtion void and return undefined
function logMessage(message) {
    console.log(message);
    return undefined;
}
logMessage("Hello, TypeScript!");
