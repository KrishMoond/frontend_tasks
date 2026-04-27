// console.log('Hello, World!');

// const obj = { name: "Krish" };
// obj.name = "krr"; 

// console.log(obj.name);

// const a =0;
// a=90;
// console.log(a);

// var a=10;
// a="krish";
// console.log(a);

// let a=10;
// a="krish";
// console.log(a);

// let a=90;
// let b="90";
// console.log(a==b);
// console.log(a===b);
// console.log(a!==b);

// let start = performance.now();

// function myFunction() {
//   for (let i = 0; i < 1000000000; i++) {}
// }

// myFunction();

// let end = performance.now();

// console.log(((end - start) / 1000).toFixed(4), "seconds");

// console.log(typeof NaN);

// console.log(0n==false);


let age=19;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}



let mark=85;
switch (true){
    case mark >= 90:
        console.log("Grade A");
        break;
    case mark >= 80:
        console.log("Grade B");
        break;
    case mark >= 70:
        console.log("Grade C"); 
        break;
    case mark >= 60:
        console.log("Grade D"); 
        break;
    case mark >= 50:
        console.log("Grade E"); 
        break;
    default:
        console.log("Grade F");
}


// function greet(name) {
//     return `Hello, ${name}!`;
// }

// console.log(greet("Krish"));


function i(a,b,c=90){
    return a+b+c;
}

console.log(i(1,2,6));

function sum(...numbers) {
    return numbers.reduce((total,num)=> total+num,0);
}

console.log(sum(1,2,3,4,5));

// const greet = function sayHello() {
//   console.log("Hello");
// };

// greet();

const a =function(){
    console.log("Hello");
}
console.log(a());


function p(parent){
    function c(child){
        return child+parent;
    }
    console.log(c(10));
}
p(100);
 

function bank(ri1) {
    function rbi(ri2) {
        function sbi(ri3) {
            return "Total interest is " + (ri3 + ri2 + ri1) + "%";
            // debugger;
        }
        return sbi(5);
    }
    return rbi(5);
}
console.log(bank(5));


function greet(name,callback){
    console.log("hello "+name);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye!");
}

greet("Krish",sayGoodbye);

// create a callback function and pass data from higher order function to callback function
function fetchData(callback) {
    setTimeout(() => {
      const data = "Data fetched from server";
      callback(data);
    }, 2000);
    
  }
  
  function displayData(data) {
     console.log("Displaying: " + data);
  }
  
   fetchData(displayData);

let aa=(a,b)=>{
    return a*b;
}
console.log(aa(5,6));   




