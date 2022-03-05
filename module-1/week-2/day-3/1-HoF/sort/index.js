// const numbers = [9, 7, 5, 3, 4, 8, 2];
const numbers = [1, 100, 2000, 10000000, 9, 54];

// console.log("Before sort =>>>>>", numbers);

// const iAmTheSameArray = numbers.sort();
numbers.sort((a, b) => {
	// if (a > b) {
	// 	return -114591561;
	// }
	// if (b > a) {
	// 	return 1285778373;
	// }
	// return 0;
	// 9 -6 = 3
	//  2 - 100 = -98
	//  3-3  =0
	return a - b;
});
// iAmTheSameArray[2] = "FOOOO";

// console.log("After sort =>>>>>", numbers.reverse());

const students = [
	"Bob",
	"Alice",
	"égion",
	"John",
	"alexander",
	"Helena",
	"Elom",
	"Region",
];

// students.sort((a, b) => {
// 	if (a.toLowerCase() > b.toLowerCase()) {
// 		return 1;
// 	}
// 	if (a.toLowerCase() < b.toLowerCase()) {
// 		return -1;
// 	}
// 	return 0;
// });
students.sort((a, b) => {
	return a.toLowerCase().localeCompare(b.toLowerCase());
});

// console.log("Aello".charCodeAt(0));

// console.log(students);

const classRoom = [
	{ name: "Bob", age: 40 },
	{ name: "John", age: 37 },
	{ name: "Alice", age: 23 },
	{ name: "Dough", age: 48 },
];

// Making copies with the spread operator
const copiedArray = [...classRoom];
// const copiedArray = Array.from(classRoom);

copiedArray.sort((a, b) => {
	// console.log("This is A : ", a);
	// console.log("This is B : ", b);
	// const iAmAge = "age";
	// return a["age"] - b[iAmAge];

	return b.age - a.age;
});

console.log("Original class: ", classRoom);
console.log("Ordered class: ", copiedArray);
