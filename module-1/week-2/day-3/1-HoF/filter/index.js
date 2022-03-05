// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const words = [
	"spray",
	"limit",
	"elite",
	"exhuberant",
	"destruction",
	"present",
	"dddd",
	"deep pa doo",
];

// const exhuberantWord = words.filter((word) => {
// 	// if (word === "exhuberant") {
// 	// 	return true;
// 	// }
// 	if (word === "somethingElse") {
// 		return true;
// 	}
// 	return false;
// });
// const exhuberantWord = words.filter((word) => {
// 	if (word.startsWith("d")) {
// 		return true;
// 	}
// });
const filteredArray = words.filter((element) => {
	return element === "present";
});

const eliteWord = words.filter((x) => x === "elite");
console.log(filteredArray);
console.log(eliteWord);

const numbers = [1, 100, 3, 54, 4, 0];

const lessThanTwenty = numbers.filter((num) => {
	return num < 20;

	// if (num < 20) {
	// 	return true;
	// } else {
	// 	return false;
	// }
});

console.log(lessThanTwenty);

const students = [
	{
		name: "John",
		shoes: "Nikes",
	},
	{
		name: "Alice",
		shoes: "DcMartins",
	},
	{
		name: "Bob",
		shoes: "Converse",
	},
	{
		name: "Johnny",
		shoes: "Nikes",
	},
];

const studentsWithNikes = students.filter(function (student) {
	if (student.shoes === "Nikes") {
		return true;
	}
});

const studentsWithoutNikes = students.filter((stud) => stud.shoes !== "Nikes");

console.log(studentsWithNikes);
console.log("No Nikes: ", studentsWithoutNikes);
