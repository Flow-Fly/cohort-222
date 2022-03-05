const numbers = [1, 2, 10, 13];

const doubledNumbers = numbers.map((element, index, originalArray) => {
	return element * 2;
});

console.log(doubledNumbers);

const helloNumbers = numbers.map((el) => {
	return `Hey I'm ${el} !`;
});

console.log(helloNumbers);

const listFromNumbers = numbers.map((number) => {
	return `<li>${number}</li>`;
});

console.log(listFromNumbers);

const students = ["John", "Bob", "Alice"];

const helloStudents = students.map((name) => {
	return `Hey my name is ${name}`;
});

console.log(helloStudents);

const otherStudents = [
	{
		name: "John",
		hobbies: ["Skating", "Snowboarding"],
	},
	{
		name: "Alice",
		hobbies: ["Coding", "Partying"],
	},
	{
		name: "Bob",
		hobbies: ["Doing nothing"],
	},
];

const studentsPresentingThemselves = otherStudents.map((foo) => {
	// console.log(foo);
	if (foo.name === "Alice") {
		return `My name is ${foo.name} and I like ${foo.hobbies[1]}`;
	}
	// return `Hey, my name is ${foo.name} and I like ${foo.hobbies.join(", ")}`;
	return "";
});
console.log(studentsPresentingThemselves);
