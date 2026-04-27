function multiply(a, b) {
  return a * b;
}


function bigger(a, b) {
  return a > b ? a : b;
}


function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}


function hof(cbf) {
  return cbf(10, 5);
}


function parent(val) {
  function child(val) {
    function grandchild(val) {
      return `Grandchild received: ${val}`;
    }
    return grandchild(val + 10);
  }
  return child(val + 5);
}

function welcome(name) {
  return `Welcome, ${name}!`;
}


const table = function (n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
  }
};



console.log(multiply(4, 5));         
console.log(bigger(7, 3));           
console.log(sum(1, 2, 3, 4, 5));     
console.log(hof(multiply));          
console.log(parent(1));              
console.log(welcome("Krish"));       
table(5);
