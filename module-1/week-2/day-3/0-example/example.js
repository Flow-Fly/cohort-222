const animals = [
	{ name: "FluffyGirafe", type: "girafe" },
	{ name: "Medor", type: "dog" },
	{ name: "Sleepyhead", type: "cat" },
	{ name: "Brutus", type: "dog" },
	{ name: "Striped", type: "zebra" },
];

// I want to have an array with all the dogs !

// const dogs = [];

// for (let i = 0; i < animals.length; i++) {
// 	if (animals[i].type === "dog") {
// 		dogs.push(animals[i]);
// 	}
// }

// const dogs = animals.filter(function (foo) {
// 	return foo.type === "dog";
// });

const dogs = animals.filter(filterDogs);

console.log("Dogs: ", dogs);

function filterDogs(animal) {
	return animal.type !== "dog";
}
