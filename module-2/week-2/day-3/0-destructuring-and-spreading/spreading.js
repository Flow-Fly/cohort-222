const myArray = ["Hammer", "Screwdriver", "visseuse", "marteau"];

const [firstOne, ...remainingElements] = myArray;

// console.log(firstOne, remainingElements);

function add(name, age, ...someNumbers) {
	console.log(`${name} is ${age}`);
	return someNumbers.reduce((acc, val) => acc + val);
}

// console.log(add("Flo", 32, 5, 7, 8, 2, 6, 7, 1));

const reptiles = ["Snake", "Alligator", "Lizard"];
const mammals = ["Puppy", "Kitten", "Bunny"];

// ES5 way :

// const animals = reptiles.concat(mammals);

const animals = [...reptiles, ...mammals];
console.log(animals);
