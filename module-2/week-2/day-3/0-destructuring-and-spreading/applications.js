const data = {
	name: {
		firstName: "Ana",
		lastName: "Marino",
	},
	isStudent: true,
	favoriteFootballTeam: "Fc Barcelona",
	hometown: {
		city: "Buenos Aires",
	},
	houses: [
		{
			location: "Argentina",
		},
		{
			location: "Argentina",
		},
		{
			location: "Argentina",
		},
		{
			location: "Argentina",
		},
		{
			location: "Argentina",
		},
		{
			location: "Argentina",
		},
		{
			location: "Spain",
		},
	],
};

const { houses } = data;

console.log("location", houses);

const myHouse = houses.find((house) => house.location === "Spain");
console.log("myHouse", myHouse);
