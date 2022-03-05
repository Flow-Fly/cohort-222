// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const myArray = ["Bob", "Alice", "John"];

// for (let i = 0; i < myArray.length; i++) {
// 	console.log(myArray[i]);
// }

myArray.forEach(function (element) {
	// console.log(element);
});

// function (args) {}
// (arguments) => {}

// myArray.forEach((name) => {
// 	console.log(name);
// });

const callback = (name, index, array) => {
	name = "Hello";
	console.log(name);
};

const whatIsReturned = myArray.forEach(callback);
console.log(whatIsReturned);
