//! Declare an Object

// const myArray = ["a", "b", "c"];
// //                0   1   2
// console.log(myArray[1]);

const cat = {
	name: "Lola",
	age: 5,
	isCute: true,
	colors: ["Blue", "Green"],
	purr: function () {
		return "Purrr purr";
	},
	miauInGerman: catGreet("Lukas"),
	location: {
		lat: 33.56486,
		lng: 24.454613,
	},
};

function catGreet(name) {
	return `Miau ${name}`;
}

// console.log(cat);
// console.log("Purr function: ", cat.purr());
// const otherWay = new Object

// console.log(cat.colors.indexOf("Blue"));

//! Add new keys

cat.care = true;

const favoriteFood = "Fish";
cat.favFood = favoriteFood;

//! Reassign values

cat.favFood = "Pasta";

//! Dot notation vs Bracket notation (Computed property)

cat["owner"] = "FooBar";
// console.log(cat["name"]);

const iAmaVariable = "colors";

// console.log(cat[iAmaVariable]);

// const customArray = ["care", "name", "something", "miauInGerman"];

// for (let i = 0; i < customArray.length; i++) {
// 	console.log(cat[customArray[i]]);
// }

//! Remove keys

delete cat.isCute;

// console.table(cat);

//! Loops

for (let key in cat) {
	if (key === "location") {
		console.log(cat[key]);
	}
}

//! Methods

//? Object.keys(argument)
const myKeys = Object.keys(cat);

//? Object.values(argument)
const myValues = Object.values(cat);

console.log("Keys: ", myKeys);
console.log("Values: ", myValues);
