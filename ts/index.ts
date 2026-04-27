// // // // // // // // 1. Basic Types (Primitives)
// // // // // // // // You can explicitly state what type of data a variable holds using a colon `:`
// // // // // // // let isDone: boolean = false;
// // // // // // // let age: number = 23;
// // let userName: string = "Krish";

// // // // // // // // 2. Arrays
// // // // // // // // Two ways to declare an array of a specific type
// // // // // // // let numbers: number[] = [1, 2, 3, 4, 5];
// // // // // // // let names: Array<string> = ["John", "Jane"]; 

// // // // // // // // 3. Tuples
// // // // // // // // Tuples allow you to express an array with a fixed number of elements whose types are known
// // // // // // // let userRecord: [number, string] = [1, "Krish"];

// // // // // // // // 4. Any and Unknown
// // // // // // // // 'any' disables type checking (use sparingly!)
// // // // // // // let looseValue: any = 4;
// // // // // // // looseValue = "Now I am a string";

// // // // // // // // 'unknown' is a safer alternative to 'any'. You must check its type before interacting with it.
// // // // // // // let unknownValue: unknown = "Hello";
// // // // // // // if (typeof unknownValue === "string") {
// // // // // // //     console.log(unknownValue.toUpperCase());
// // // // // // // }

// // // // // // // // 5. Functions
// // // // // // // // You can specify the types for parameters and the expected return type
// // // // // // // function add(a: number, b: number): number {
// // // // // // //     return a + b;
// // // // // // // }

// // // // // // // // The `?` makes a parameter optional.
// // // // // // // function greet(name: string, greeting?: string): string {
// // // // // // //     if (greeting) {
// // // // // // //         return `${greeting}, ${name}!`;
// // // // // // //     }
// // // // // // //     return `Hello, ${name}!`;
// // // // // // // }

// // // // // // // // 6. Interfaces (Defining object shapes)
// // // // // // // // Interfaces dictate the structure that an object must follow
// // // // // // // interface User {
// // // // // // //     id: number;
// // // // // // //     name: string;
// // // // // // //     email?: string; // Optional property
// // // // // // // }

// // // // // // // let myUser: User = {
// // // // // // //     id: 1,
// // // // // // //     name: "Krish" // 'email' is omitted, and that's perfectly fine!
// // // // // // // };

// // // // // // // // 7. Type Aliases & Union Types
// // // // // // // // Union types (|) allow a variable to be one of multiple types
// // // // // // // type ID = number | string; 
// // // // // // // let userId: ID = 101;
// // // // // // // userId = "A-101"; // Both are valid!

// // // // // // // // 8. Classes and Access Modifiers
// // // // // // // // TypeScript adds public, private, and protected modifiers to classes
// // // // // // // class Person {
// // // // // // //     public name: string;
// // // // // // //     private secretCode: string; // Only accessible inside this class

// // // // // // //     constructor(name: string, secretCode: string) {
// // // // // // //         this.name = name;
// // // // // // //         this.secretCode = secretCode;
// // // // // // //     }

// // // // // // //     public getDetails(): string {
// // // // // // //         return `${this.name}'s secret code is ${this.secretCode}`;
// // // // // // //     }
// // // // // // // }

// // // // // // // const person1 = new Person("Krish", "XYZ987");
// // // // // // // console.log(person1.getDetails());
// // // // // // // // console.log(person1.secretCode); // Error: Property 'secretCode' is private!


// // // // // // //object
// // // // // // let demo:{
// // // // // //     name:string,
// // // // // //     age?:number;
// // // // // //     isActive:boolean,
// // // // // //     readonly id:number
// // // // // // }={
// // // // // //     name:"Krish",
// // // // // //     // age:23,
// // // // // //     isActive:true,
// // // // // //     id:1234,

// // // // // // }
// // // // // // console.log(demo);

// // // // // // // Modifying a normal property works perfectly fine
// // // // // // demo.name = "John";

// // // // // // // Attempting to modify a readonly property causes a TypeScript error
// // // // // // // If you uncomment the next line, TypeScript will show an error in your editor:
// // // // // // // demo.id = 5678; // TS Error: Cannot assign to 'id' because it is a read-only property.

// // // // // // type Car = {
// // // // // //   name: string;
// // // // // //   model: number;
// // // // // //   color: string;
// // // // // //   price?: number;
// // // // // // };

// // // // // // let car: Car = {
// // // // // //   name: "Maruti",
// // // // // //   model: 2024,
// // // // // //   color: "White",
// // // // // // };

// // // // // // console.log(car);


// // // // // // //special data types

// // // // // // //1. any
// // // // // // let data: any = "hello";
// // // // // // data = 10;
// // // // // // data = true;
// // // // // // console.log(data);

// // // // // // // //unknown safer version of any allow all types of values but you have to go through
// // // // // // // //type checking type narrowing( converting general type to more specific type )
// // // // // // // //use conditional statement for type narrowing 
// // // // // // // let userInput: unknown;
// // // // // // // let userName: string = ""; // Initialize with a default value

// // // // // // // userInput = 10;
// // // // // // // userInput = "Krish";

// // // // // // // // This type guard is essential for 'unknown'. It checks if 'userInput' is a string before assigning it.
// // // // // // // if (typeof userInput === "string") {
// // // // // // //   userName = userInput;
// // // // // // // }

// // // // // // // console.log(userName); // This is now guaranteed to log a string value.


// // // // // // // //create a function which is having 3 parameters and console those parameteres and make sure
// // // // // // // //that function should not return anything

// // // // // // // function demoFunc(name:string, age:number, isActive:boolean):void{
// // // // // // //     console.log(name,age,isActive);
// // // // // // // }
// // // // // // // demoFunc("Krish",23,true);

// // // // // // // //trying with undefined 
// // // // // // // function demoFunc1(name:string, age:number, isActive:boolean):undefined{
// // // // // // //     console.log(name, age, isActive);
// // // // // // //     return undefined;
// // // // // // // }
// // // // // // // demoFunc1("Krish",23,true);


// // // // // // // //trying with never
// // // // // // // function demoFunc2(name:string, age:number, isActive:boolean):never{
// // // // // // //     console.log(name, age, isActive);
// // // // // // //     throw new Error("error occured");    
// // // // // // // }
// // // // // // // // demoFunc2("Krish", 23, true);


// // // // // // // //create a function which is never going to execute never going to terminate 
// // // // // // // function demoFunc3(name:string, age:number, isActive:boolean):never{
// // // // // // //     while(true){
// // // // // // //         console.log(name, age, isActive);
// // // // // // //     }
// // // // // // // }
// // // // // // // // demoFunc3("Krish", 23, true);

// // // // // // // //creating nested object
// // // // // // // type user1={
// // // // // // //     name:string,
// // // // // // //     age:number,
// // // // // // //     isActive:boolean,
// // // // // // //     skills:{
// // // // // // //         skill1:string,
// // // // // // //         skill2:string
// // // // // // //     }
// // // // // // // }

// // // // // // // let user1={
// // // // // // //     name:"Krish",
// // // // // // //     age:23,
// // // // // // //     isActive:true,
// // // // // // //     skills:{
// // // // // // //         skill1:"TS",
// // // // // // //         skill2:"JS"
// // // // // // //     }
// // // // // // // }

// // // // // // // console.log(user1);

// // // // // // //arrays
// // // // // // let arr:number|string|boolean|any[]=[1,2,3,4,5,"hi",true];
// // // // // // console.log(arr);

// // // // // // //type inference
// // // // // // let arr1=[1,2,3,4,5,"hi",true];
// // // // // // console.log(arr1);
// // // // // // arr1.push(10);
// // // // // // console.log(arr1);

// // // // // // //create a constant array
// // // // // // const arr2=[1,2,3,4,5,"hi",true];
// // // // // // console.log(arr2);
// // // // // // arr2.push(10);


// // // // // // //array of objects
// // // // // // type UserObject = {
// // // // // //     id: number;
// // // // // //     name: string;
// // // // // //     email?: string;
// // // // // // };

// // // // // // const userObjects: UserObject[] = [
// // // // // //     { id: 1, name: "Krish", email: "krish@example.com" },
// // // // // //     { id: 2, name: "John" },
// // // // // //     { id: 3, name: "Jane", email: "jane@example.com" }
// // // // // // ];

// // // // // // console.log(userObjects);

// // // // // // userObjects.push({id:4, name:"Smith", email:"smith@example.com"});
// // // // // // console.log(userObjects);

// // // // // // let a:[string,number,boolean]=["abc",12,true]; //restricting length of array using tuple
// // // // // // console.log(a);
// // // // // // a.push(10);
// // // // // // console.log(a);


// // // // // // type alias
// // // // // // Type aliases allow you to create a new name for any existing type.
// // // // // type Point = {
// // // // //   x: number;
// // // // //   y: number;
// // // // // };

// // // // // // Using the type alias
// // // // // let center: Point = {
// // // // //   x: 0,
// // // // //   y: 0
// // // // // };
// // // // // console.log("Center Point:", center);

// // // // // They are especially useful for union types
// // // // // type Status = "pending" | "approved" | "rejected";
// // // // // let currentStatus: Status = "pending";
// // // // // console.log("Current Status:", currentStatus);

// // // // // //type alias with array
// // // // // let arr3:Point[]=[{x:1,y:2},{x:3,y:4}];
// // // // // console.log(arr3);

// // // // // //type alias with functions
// // // // // type AddFunction = (a: number, b: number) => number;
// // // // // const add: AddFunction = (a, b) => {
// // // // //   return a + b;
// // // // // };
// // // // // console.log(add(10, 20));

// // // // // //create a type for array and create a function which accept one parameter and returns an array
// // // // // type StringArray=string[];
// // // // // function demoFunc4(str:StringArray):StringArray{
// // // // //     return str;
// // // // // }
// // // // // console.log(demoFunc4(["a","b","c"]));



// // // // // type username=string;
// // // // // let user:username="Krish";
// // // // // console.log(user);

// // // // // type car={
// // // // //     name:string;
// // // // //     model:number;
// // // // //     color:string;
// // // // //     price?:number;

// // // // // }

// // // // // let Car1:car={
// // // // //     name:"Maruti",
// // // // //     model:2024,
// // // // //     color:"white",
// // // // //     price:1000000
// // // // // }
// // // // // console.log(Car1);

// // // // // type profile={
// // // // //     id:number;
// // // // //     bio?:string;
// // // // // }

// // // // // let user1:profile={
// // // // //     id:1,
// // // // //     bio:"I am a developer",
// // // // // }

// // // // // console.log(user1);


// // // // // type MathOp=(a:number, b:number)=>number;
// // // // // const a :MathOp=(x,y)=>{
// // // // //     return x+y;
// // // // // }
// // // // // console.log(a(10,20));


// // // // // type PriceList = number[];
// // // // // const prices: PriceList = [100, 200, 300];
// // // // // console.log(prices);

// // // // interface Product {
// // // //   name: string;
// // // //   price: number;
// // // //   category: string;
// // // // }

// // // // const products: Product[] = [
// // // //   { name: "Laptop", 
// // // //     price: 1000, 
// // // //     category: "Electronics" 
// // // // },
// // // //   { name: "Book", 
// // // //     price: 20, 
// // // //     category: "Education"
// // // //  }
// // // // ];

// // // // console.log(products);


// // // // interface car{
// // // //     readonly name: string;
// // // //     model:number;
// // // //     color:string;
// // // //     price?:number;

// // // // }

// // // // const car:car[]=[
// // // //     {
// // // //         name:"maruti",
// // // //         model:2024,
// // // //         color:"white",
// // // //         price:1000000
// // // //     },
// // // //     {
// // // //         name:"honda",
// // // //         model:2023,
// // // //         color:"black",
// // // //         price:1500000
// // // //     }
// // // // ]

// // // // console.log(car);

// // // // type collection={
// // // //     car:car[],
// // // //     Product:Product[]
// // // // }

// // // // const collection:collection={
// // // //     car,
// // // //     Product:products
// // // // }

// // // // console.log(collection);

// // // // //splitting of interface
// // // // interface Address{
// // // //     name:string
// // // // }

// // // // interface Address{
// // // //     houseNo:number
// // // // }

// // // // interface Address{
// // // //     street:string
// // // // }

// // // // const add:Address={
// // // //     name:"Krish",
// // // //     houseNo:123,
// // // //     street:"Main Street"
// // // // }

// // // // console.log(add);


// // // // //inheritance in interface
// // // // interface Animal {
// // // //     species: string;
// // // // }

// // // // interface Dog extends Animal {
// // // //     breed: string;
// // // // }

// // // // const myDog: Dog = {
// // // //     species: "Canine",
// // // //     breed: "Golden Retriever"
// // // // };

// // // // console.log(myDog);


// // // // interface Laptop{
// // // //     brand:string;
// // // //     model:string;
// // // // }

// // // // interface Specs extends Laptop{
// // // //     ram:string;
// // // //     storage:string;
// // // // }

// // // // const laptop:Specs={
// // // //     brand:"Dell",
// // // //     model:"Inspiron",
// // // //     ram:"8GB",
// // // //     storage:"256GB"
// // // // }

// // // // console.log(laptop);

// // // // class Demo{
// // // //     public name: string;
// // // //     private id: number;

// // // //     constructor(name: string, id: number) {
// // // //         this.name = name;
// // // //         this.id = id;
// // // //     }

// // // //     public displayInfo(): void {
// // // //         console.log(`Name: ${this.name}, ID: ${this.id}`);
// // // //     }

// // // // }
// // // // const demo=new Demo("Krish",12345);
// // // // demo.displayInfo();

// // // // class Demo1{
// // // //     // Index signature allows adding properties dynamically
// // // //     [key: string]: any;

// // // //     constructor(data?: Record<string, any>) {
// // // //         if (data) {
// // // //             Object.assign(this, data);
// // // //         }
// // // //     }
// // // // }

// // // // const dynamicDemo = new Demo1({ age: 25, role: "Developer", isActive: true, salary: 50000});
// // // // console.log(dynamicDemo);
// // // // console.log("Role:", dynamicDemo.role);

// // // // //inheritance in class in ts

// // // // class AnimalClass {
// // // //     public name: string;

// // // //     constructor(name: string) {
// // // //         this.name = name;
// // // //     }

// // // //     public makeSound(): void {
// // // //         console.log("Generic animal sound");
// // // //     }
// // // // }

// // // // class DogClass extends AnimalClass {
// // // //     public breed: string;

// // // //     constructor(name: string, breed: string) {
// // // //         super(name); 
// // // //         this.breed = breed;
// // // //     }

// // // //     // Overriding the parent method
// // // //     public makeSound(): void {
// // // //         console.log("Woof! Woof!");
// // // //     }
// // // // }

// // // // const myPet = new DogClass("Buddy", "Golden Retriever");
// // // // console.log(`My pet is a ${myPet.breed} named ${myPet.name}.`);
// // // // myPet.makeSound();


// // // // class ItCompnay{
// // // //     public name: string;
// // // //     protected sector: string;

// // // //     constructor(name: string, sector: string) {
// // // //         this.name = name;
// // // //         this.sector = sector;
// // // //     }

// // // //     public getSector(): string {
// // // //         return this.sector;
// // // //     }

// // // // }

// // // // class Capgemini extends ItCompnay{
// // // //     private domain: string;

// // // //     constructor(name: string, sector: string, domain: string) {
// // // //         super(name, sector);
// // // //         this.domain = domain;
// // // //     }

// // // //     public getDomain(): string {
// // // //         // We can access this.sector directly because it is protected in the parent class
// // // //         console.log(`${this.name} operates in ${this.sector} sector with ${this.domain} domain`);
// // // //         return this.domain;
    
// // // //     }
// // // // }

// // // // const myComp= new Capgemini("Capgemini", "IT", "Consulting");
// // // // console.log(myComp.name); // Accessible because 'name' is public
// // // // // console.log(myComp.sector); // Error: Property 'sector' is protected
// // // // // console.log(myComp.domain); // Error: Property 'domain' is private
// // // // console.log(myComp.getDomain());
// // // // console.log(myComp.getSector());


// // // // // Type Guards allow you to narrow down the type of an object within a conditional block

// // // // function printId(id: number | string) {
// // // //     if (typeof id === "string") {
// // // //         console.log(`String ID: ${id.toUpperCase()}`);
// // // //     } else {
// // // //         console.log(`Numeric ID: ${id}`);
// // // //     }
// // // // }
// // // // printId(101);
// // // // printId("202a");

// // // // interface Bird {
// // // //     fly(): void;
// // // //     layEggs(): void;
// // // // }

// // // // interface Fish {
// // // //     swim(): void;
// // // //     layEggs(): void;
// // // // }

// // // // interface Fish {
// // // //   swim: () => void;
// // // // }

// // // // interface Bird {
// // // //   fly: () => void;
// // // // }

// // // // function isFish(pet: Fish | Bird): pet is Fish {
// // // //   return (pet as Fish).swim !== undefined;
// // // // }

// // // // // const myPet: Fish | Bird = {
// // // // //   swim: () => console.log("Swimming!")
// // // // // };

// // // // // if (isFish(myPet)) {
// // // // //   myPet.swim();
// // // // // } else {
// // // // //   myPet.fly();
// // // // // } 

// // // type myfun=(a: number, b:number)=> number;
// // // const a:myfun=(x, y)=>{
// // //     return x+y;
// // // }
// // // console.log(a(10,20));

// // // function mf(name:string): void{
// // //     console.log(name);
// // // }

// // // const aa =mf("hello");
// // // console.log(aa);

// // // function add(a: number, b: number): number;
// // // function add(a: string, b: string): string;

// // // function add(a: any, b: any): any {
// // //     return a + b;
// // // }

// // // console.log(add(5, 10)); 
// // // console.log(add("Hello, ", "World!"));

// // // // function print(value: string): void;
// // // // function print(value: number): void;

// // // // function print(value: any): void {
// // // //     console.log(value);
// // // // }

// // // // print("Hello TypeScript!");
// // // // print(100);


// // //generics in ts
// // function identity<T>(arg: T): T {
// //     return arg;
// // }

// // let a= identity<string>("Hello");
// // console.log(a);

// // let b=identity<number>(100);
// // console.log(b);


// // function genericFun<T, U, V>(a:T, b:U, c:V):void{
// //     console.log(a, b, c);
// // }
// // genericFun<string, number, boolean>("Hello", 100, true);

// // //generics with interface 
// // interface user<T>{
// //     name:T;
// //     age:T;
// //     email:T;
// // }

// // let user1:user<string>={
// //     name:"Krish",
// //     age:"22",
// //     email:"krish@example.com"
// // }

// // console.log(user1);


// // //create multiple type with help of generic and interface and pass the type to the property 
// // //some property must be optional and some must be constant we should not modiffy those properties 
// // interface AdvancedUser<T, U, V> {
// //     readonly id: T;      // Constant property, cannot be modified
// //     name: U;             // Standard property
// //     metadata?: V;        // Optional property
// // }

// // let advancedUser1: AdvancedUser<number, string, boolean> = {
// //     id: 1,
// //     name: "Krish"
// //     // metadata is optional, so it can be omitted without errors
// // };

// // console.log(advancedUser1);
// // // advancedUser1.id = 2; // TS Error: Cannot assign to 'id' because it is a read-only property.


// // //create another interface and that one must extends above 
// // interface AdminUser<T, U, V> extends AdvancedUser<T, U, V> {
// //     role: "admin";       // Constant property with literal type
// //     permissions: string[]; // Additional property specific to AdminUser
// // }
// // let admin1: AdminUser<number, string, boolean> = {
// //     id: 1,
// //     name: "Krish",
// //     role: "admin",
// //     permissions: ["read", "write", "delete"]
// // }
// // console.log(admin1);

// // //generic with class

// // class GenericClass<T> {
// //     value: T;

// //     constructor(value: T) {
// //         this.value = value;
// //     }

// //     getValue(): T {
// //         return this.value;
// //     }
// // }
// // const genericString = new GenericClass<string>("Hello, TypeScript!");
// // console.log(genericString.getValue());


// // type assertion usage
// // Type assertions are a way to tell TypeScript "trust me, I know what I'm doing."
// // It is similar to type casting in other languages, but performs no runtime checking or restructuring.

// // 1. Using the 'as' syntax 
// let someValue: unknown = "This is a string";
// let strLength: number = (someValue as string).length;
// console.log(`String length is: ${strLength}`);

// // 2. Using the angle-bracket syntax
// let anotherValue: unknown = "This is another string";
// let anotherStrLength: number = (<string>anotherValue).length;
// console.log(`Another string length is: ${anotherStrLength}`);

// // 3. Practical Example: DOM Elements (commented out to prevent execution errors in Node)
// // TypeScript only knows `getElementById` returns an `HTMLElement | null`.
// // We assert it as `HTMLInputElement` so we can safely access the `.value` property.
// // const myInput = document.getElementById("user-input") as HTMLInputElement;
// // myInput.value = "Hello World";

// // 4. Asserting specific union types
// type StatusCode = 200 | 404 | 500;
// let myCode: number = 404;
// let currentStatusCode = myCode as StatusCode;
// console.log(`Current status code: ${currentStatusCode}`);


// --- 1) Interface Person and object ---
interface Person {
  name: string;
  age: number;
}

const myPerson: Person = {
  name: "Alice",
  age: 28
};

console.log(myPerson.name);


// --- 2) Variable status with exact values ---
type Status = "active" | "inactive";

let currentStatus: Status = "active";
// currentStatus = "pending"; // TypeScript Error: Type '"pending"' is not assignable to type '"active" | "inactive"'.


// --- 3) Interface Car and 2 objects ---
interface Car {
  brand: string;
  model: string;
}

const myFirstCar: Car = {
  brand: "Toyota",
  model: "Corolla"
};

const mySecondCar: Car = {
  brand: "Honda",
  model: "Civic"
};


// --- 4) Interface User ---
interface User {
  id: number;
  username: string;
  email: string;
  isActive?: boolean; 
}

const user1: User = {
  id: 101,
  username: "johndoe",
  email: "john@example.com",
  isActive: true
};

const user2: User = {
  id: 102,
  username: "janedoe",
  email: "jane@example.com"
};


//create a funxtion void and return undefined
function logMessage(message: string): void {
    console.log(message);
    // return undefined; // This is optional, as void functions can return undefined implicitly
}
