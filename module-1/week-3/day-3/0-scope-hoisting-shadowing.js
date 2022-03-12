// SCOPE -> defines the region of the program where a particular variable is accessible.
// var student;
// let student1;

if(true){
  let test = "Test scope"; // block scope
  console.log(test);
}

var var1 = 5;
var1 = 6;

let let1 = 5;
let1 = 6;

// const1 -------> 0x6667778
const const1 = { name: "Diego" }; 
const1.name = "Jessica";

const array = [];
array.push(1);


// Hoisting

console.log(student);

var student = { name: "Lukas"};

console.log(student);

// console.log(student1);

let student1 = { name: "Lukas"};

console.log(student1);


const student2 = undefined;

console.log(student2);

// Shadowing

let ironhacker = false;

if(ironhacker){
  let ironhacker = "Test";
  console.log('Ironhacker value', ironhacker);
} else {
  let ironhacker = "Test false";
  console.log('Ironhacker value', ironhacker);
}

let result;
if(ironhacker){
  result = "Test";
  console.log('Ironhacker value', result);
} else {
  result = "Test false";
  console.log('Ironhacker value', result);
}

console.log('Ironhacker value', ironhacker);