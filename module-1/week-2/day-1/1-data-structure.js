//! Comparing Objects and Arrays

const myFirstArray = [1, 2, { name: "John" }];
const mySecondArray = [1, 2, 3];

const copiedArray = [...myFirstArray];

copiedArray[2].name = "Bob";

// console.log(myFirstArray);
// mySecondArray[0] = 0;
// console.log(myFirstArray);
// console.log(mySecondArray);
// console.log(myFirstArray === mySecondArray);

const myObj = { name: "foo" };
const myOtherObj = { name: "foo" };

console.log({ ...myObj });

const referenceToMyObj = myObj;
referenceToMyObj.surname = "bar";
// console.log(myObj, referenceToMyObj);

//JSON stringify

console.log(typeof JSON.stringify(copiedArray));

const randomObject = [1, 2, { name: "Bob" }];

console.log(JSON.stringify(copiedArray) === JSON.stringify(randomObject));

// JSON parse

const stringifiedObject = JSON.stringify(copiedArray);
console.log(stringifiedObject);
const newObject = JSON.parse(stringifiedObject);
console.log(newObject);

//! Nested Data Structures

const matrix = [
	["Laia", "Joao", "Maria"], //   0
	//   0        1       2
	["Elvan", "Hydr", [0, 1, 2]], // 1
	//    0        1        2
	["Ornella", "Helena", "Alice"], //  2
	//   0         1          2
];

console.log(matrix[1][2][0]);
