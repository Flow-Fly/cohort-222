const fridge = [
	{
		name: "Carotte",
		weight: 10,
		type: "vegetable",
	},
	{
		name: "Beer",
		weight: 100,
		type: "beverage",
	},
	{
		name: "Tomatoes",
		weight: 150,
		type: "vegetable",
	},
	{
		name: "Cucumber",
		weight: 150,
		type: "vegetable",
	},
	{
		name: "Oranges",
		weight: 150,
		type: "fruit",
	},

	{
		name: "Mozarella",
		weight: 150,
		type: "dairy",
	},
	{
		name: "Zuchinni",
		weight: 100,
		type: "vegetable",
	},
	{
		name: "Parmigiano",
		weight: 150,
		type: "dairy",
	},
];

const ingredients = ["Carotte", "Zuchinni", "Tomatoes", "Parmigiano"];

const myRatatouille = fridge
	.filter((item) => {
		// console.log(item);
		return ingredients.includes(item.name);
	})
	.map((el) => {
		return `Chopped ${el.name}`;
	});

console.log(myRatatouille);
