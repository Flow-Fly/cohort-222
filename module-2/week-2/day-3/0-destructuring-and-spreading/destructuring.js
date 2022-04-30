const otherPeople = [
	{
		name: "Bob",
		age: 20,
	},
	{
		name: "John",
		age: 27,
	},
	{
		name: "Rodolph",
	},
];

otherPeople.forEach((person) => howOldAreYou(person));

function howOldAreYou({ name, age }) {
	console.log(`${name} is ${age} years old`);
}
//! What we used to do from ES5
// const personName = person.name;
// const personAge = person.age;
// const personHair = person.hairColour;

//! Since ES6

const name = "Bob";

const person = {
	name: "Ironhacker",
	age: 25,
	hairColour: "blue",
	favoriteMusic: "Funk",
	addresses: [
		{
			street: "Super cool St",
			number: 123,
			city: "Miami",
		},
		{
			street: "Rue de la paix",
			houses: [
				{ name: "myHouse" },
				{ name: "an other house that no one goes to" },
			],
		},
	],
};
const {
	addresses: [
		{ street },
		{
			houses: [{ name: houseName }, { name: hauntedHouse }],
		},
	],
} = person;

const { name: personName, age, favoriteMusic } = person;

// Accessing nested object

console.log(houseName, hauntedHouse);

const myArray = ["Hammer", "Screwdriver", "visseuse", "marteau"];

const [firstElement, secondElement, , lastOne] = myArray;

console.log(firstElement, secondElement, lastOne);
