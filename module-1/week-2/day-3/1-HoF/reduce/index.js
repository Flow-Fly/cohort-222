// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const numbers = [1, 2, 13];

// const sum = numbers.reduce((accumulator, value) => {
// 	console.log("Acc: ", accumulator);
// 	console.log("Value: ", value);

// 	return accumulator + value;
// });

const someValue = numbers.reduce(myReducer, 0);

const sum = numbers.reduce((acc, val) => {
	// console.log("acc: ", acc);
	// console.log("Val: ", val);

	return acc + val;
}, 0);

console.log("Sum: ", sum);

function myReducer(acc, val) {
	return acc + val;
}

const students = [
	{ name: "Bob", age: 10 },
	{
		name: "Alice",
		age: 15,
	},
];

const sumOfAge = students.reduce((acc, val) => {
	console.log("acc: ", acc);
	console.log(val);
	return acc + val.age;
}, 0);

console.log(sumOfAge);

const avg =
	students.reduce((acc, val) => {
		return acc + val.age;
	}, 0) / students.length;
console.log(avg);

const arrayOfNumbers = [10, 5, 6, 4, 50];

const moreThanSix = arrayOfNumbers.reduce((acc, val) => {
	if (val >= 6) {
		acc.push(val);
	}
	return acc;
}, []);

console.log(moreThanSix);
