// // let a="'this is 'a string";
// // console.log(a);

// // let name="Krish";
// // let greeting=`Hello, ${name}!`;
// // console.log(greeting);

// // for(let i=0;i<name.length;i++){
// //     console.log(name[i]);
// // }

// // let str="Hello";
// // for(let char of str){
// //     console.log(char);
// // }

// // let c="hello"
// // for(let i=0;i<c.length;i++){
// //     console.log(c[i]);
// // }

// let str1="Hello";
// let reversed="";
// for(let i=str1.length-1;i>=0;i--){
//     reversed+=str1[i];
// }
// console.log(reversed);

// let str2="Hello World";
// let words=str2.split(" ");
// console.log(words);

// let str3="Hello World";
// let replaced=str3.replace("World","JavaScript");
// console.log(replaced);


// let str4="Hello World";
// let upper=str4.toUpperCase();
// console.log(upper);

// let str5="Hello World";
// let lower=str5.toLowerCase();
// console.log(lower);

// console.log(str1.length);
// console.log(str1.indexOf("o"));
// console.log(str1.slice(0,5));
// console.log(str1.substring(0,5));
// console.log(str1.includes("o"));
// console.log(str1.startsWith("H"));
// console.log(str1.endsWith("o"));
// console.log(str1.concat(" ", "World"));

// let strr="     krish       ";
// console.log(strr.trim());

// console.log(str1.replace(/o/g, "a"));


// let arr=["Hello","World"];
// arr.push("JavaScript");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift("Hi");
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.forEach(word => console.log(word));
// let upperArr=arr.map(word => word.toUpperCase());
// console.log(upperArr);

// arr.reverse();
// console.log(arr);

// console.log(arr.join(" "));

// let str11="Krish";
// let str=str11.split("");
// str.reverse();
// console.log(str.join(""));


// let a=[1,2,3,4,5];

// function findMax(a){
//     let max=a[0];
//     for(x of a){
//         if(x>max){
//             max=x;
//         }
//     }
//     return max;
// }
// console.log(findMax(a));

// console.log(Math.max(...a));
// console.log(Math.min(...a));

// let arr1=[1,2,3,4,5,5,6,7,8,9,10];
// let evenarr=arr1.filter(x=>x%2===0);
// console.log(evenarr);

// // let oddarr=arr1.filter(x=>x%2!==0);
// // console.log(oddarr);

// // let data=arr1.map((ele)=>{
// //     return ele%2===0 ? "Even" : "Odd";
// // });
// // console.log(data);


// // let sum=arr1.reduce((acc,ele)=>{
// //     return acc+ele;
// // },0);
// // console.log(sum);


// // function Person(name,age){
// //     this.name=name;
// //     this.age=age;
// // }
// // console.log(new Person("Krish",23));

// // class Person1{
// //     constructor(name,age){
// //         this.name=name;
// //         this.age=age;
// //     }
// // }
// // console.log(new Person1("Krish",23));

// // let obj={
// //     name:"Krish",
// //     age:23,
// //     skill:{
// //         programming:"JAVA",
// //         design:false
        
// //     }
// // }
// // console.log(obj);
// // console.log(obj.skill.programming);

// // let arrOfObj=[
// //     {name:"Krish",age:23},
// //     {name:"John",age:30},
// //     {name:"Jane",age:25}
// // ];
// // console.log(arrOfObj);

// // console.log(arrOfObj[0].name);


// let data1={
//     name:"Krish",
//     age:23,
//     skill:{
//         programming:"JAVA",
//         design:false
        
//     }
// }

// console.log(Object.keys(data1));
// console.log(Object.values(data1));
// console.log(Object.entries(data1));
// console.log(Object.seal(data1));

// data1.name="John";
// console.log(data1);
// delete data1.age;
// console.log(data1);

// Object.freeze(data1);
// data1.name="Jane";
// console.log(data1);
// delete data1.age;
// console.log(data1);

// console.log(Object.isFrozen(data1));

// let jsonData=JSON.stringify(data1);
// console.log(jsonData);

// console.log(JSON.parse(jsonData));

// //destrucring
// let [a,b]=[1,2];
// console.log(a,b);

// let {name,age}=data1;
// console.log(name,age);

// async function fetchData(){

//     const response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data=await response.json();
//     console.log(data);
// }
// fetchData();

// function fetchMockData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccess = Math.random() >= 0.5;
      
//       if (isSuccess) {
//         resolve("Data accepted");
//       } else {
//         reject("Error: Failed to fetch data (Rejected State)");
//       }
//     }, 2000);
//   });
// }

// fetchMockData()
//   .then(data => console.log("Success:", data)) 
//   .catch(error => console.error("Failure:", error)); 

// async function fetchUserData() {
//   try {
//     console.log("Fetching data...")
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/10');
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     const data = await response.json();
//     console.log("Data successfully fetched:", data);
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//   }
// }

// fetchUserData();


function abs(){
    var username="Krish";
    return username;
}

let user = abs();
console.log(user);