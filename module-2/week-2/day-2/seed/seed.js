require("../config/mongo");
const mongoose = require("mongoose");
const Project = require("../models/project.model");
const Student = require("../models/student.model");

const students = [
	{
		name: "Alice",
		github: "https://github.com/alice101001011",
		hasPets: true,
		petsNames: ["cat"],
		projects: [],
	},
	{
		name: "Begoña",
		github: "https://github.com/begopla",
		hasPets: false,
		projects: [],
	},
	{
		name: "Cristina",
		github: "https://github.com/cristinahcm",
		hasPets: true,
		petName: ["gato"],
		projects: [],
	},
	{
		name: "Elom",
		github: "https://github.com/EElom",
		hasPets: false,
		projects: [],
	},
	{
		name: "Gabriel",
		github: "https://github.com/Gabriel-PF",
		hasPets: true,
		petsNames: ["gato"],
		projects: [],
	},
	{
		name: "Helena",
		github: "https://github.com/Helsinky91",
		hasPets: true,
		petsNames: ["kiwi", "Greta"],
		projects: [],
	},
	{
		name: "Jaison",
		github: "https://github.com/jacobjaison",
		hasPets: false,
		projects: [],
	},
	{
		name: "Jessica",
		github: "https://github.com/jferassef",
		hasPets: true,
		petsNames: ["Ruverto"],
		projects: [],
	},
	{
		name: "Joao Inacio",
		github: "https://github.com/joaoMiguelInacio",
		hasPets: false,
		projects: [],
	},
	{
		name: "Joao Beyer",
		github: "https://github.com/DantasBeyer",
		hasPets: true,
		petsNames: ["Shiva", "Pandora"],
		projects: [],
	},
	{
		name: "Laia",
		github: "https://github.com/markixa",
		hasPets: true,
		petsNames: ["Lois"],
		projects: [],
	},
	{
		name: "Lukas",
		github: "https://github.com/LukasBaur89",
		hasPets: false,
		projects: [],
	},
	{
		name: "Maria",
		github: "https://github.com/EugeBr",
		hasPets: true,
		petsNames: ["Runa", "Arya"],
		projects: [],
	},
	{
		name: "Ornella",
		github: "https://github.com/Ornella-e",
		hasPets: true,
		petsNames: ["Alba"],
		projects: [],
	},
];

const projects = [
	{
		name: "No-Rona",
		url: "https://alice101001011.github.io/no-rona/",
		module: 1,
		description: `The year is 2022, and the plague that shall not be named has had its grip on humanity for a while now.

    But still, you can't avoid leaving the house forever, so you decide to face the dangers outside and go for a walk in the park. Your mission: stay negative!
    
    It's okay – the concentration of the virus is pretty low here, you manage to dodge it quite easily. Maybe you get hit by a little floating virus or two – and you do get damage! – but you survive relatively unscathed. You remember that you need to buy groceries along the way, so you enter the nearest shop. It's definitely harder here to avoid inhaling the microscopic balls of death, the shop is crowded. But you manage. Okay, that wasn't so bad, you think to yourself. You're in a good mood now. Right after paying for your groceries, a friend calls you: they're at a bar nearby, why don't you come have a drink? You decide that yes, seeing friends would be great, so you go. What you didn't quite expect when you enter the bar: it's packed! You have to find your friend and on the way try to steer clear of the numerous viruses flying around. Will you stay negative ...?`,
	},
	{
		name: "Ball Pong",
		url: "https://begopla.github.io/ball-pong/",
		module: 1,
		description:
			"Ball-pong ia a game wher the player has to deffend their goal against the opponent, the console. It will hit the ball everytime is near thir goal aiming towards the opponent goal. The end game if one of the players //user player or opponent, the console*/ scores a goal or the clock timer runs out of seconds. If the user player scores a goal it wins the game, if a goal is scored in their goal or the timer runs ot it looses the game.",
	},
	{
		name: "Badword",
		url: "https://cristinahcm.github.io/badword.github.io/",
		description: `We all know wordle, a game where you have to guess a random word with 5 letters. Badword is a similar one, but instead of having 5 letters and a normal word, you will have to guess a random Bad Bunny's song. The game ends when you dont guess the word or if you guess it.`,
	},
	{
		name: "Snake Game",
		url: "https://eelom.github.io/snake-game/",
		module: 1,
	},
	{
		name: "Whac-a-mole",
		url: "https://gabriel-pf.github.io/Whac-a-mole/",
		module: 1,
		description:
			'Whac-A-Mole is an arcade game, originally known as Mogura Taiji (モグラ退治, "Mole Buster") or Mogura Tataki (モグラたたき, "Mole Smash") in Japan. A typical Whac-A-Mole machine consists of a waist-level cabinet with a play area and display screen, and a large, soft, black mallet. Five holes in the play area top are filled with small, plastic, cartoonish moles, which pop up at random. Points are scored by whacking each mole as it appears. The faster the reaction, the higher the score.',
	},
	{
		name: "Snake 2022",
		url: "https://helsinky91.github.io/snake-2022/",
		module: 1,
		description: "Recreation of the snake game from the old Nokia 3310",
	},
	{
		name: "Space Burger",
		url: "https://jferassef.github.io/Ironhack-SpaceBurguer-game-project/",
		module: 1,
		description: `
    Game will be a 2d game, clasic style, where the avatar will move side to side along the width picking the rigth ingredients.
    When start button is clicked the game starts.
    ingredients have to be choose in the order the client wants (client order will be display in the top left corner of the screen)
    Picked ingredients will be display on the top right of the screen
    Player scores each time it picks a product
    On each level it will need to catch another ration of the same ingredients.
    Ingredients will fall random way
`,
	},
	{
		name: "Flappy birds",
		module: 1,
	},
	{
		name: "Demon Slayer Dodging",
		url: "https://joaomiguelinacio.github.io/demon-slayer-dodging/",
		module: 1,
		description: `We will revisit the last fight of the Entertainment District Arc of Demon Slayer, against Gyutaro. star_struck

    In the game, we will have to avoid the obstacles thrown at us (The Flying Blood Sickles) and move towards the enemy until he is within the range of our attack.`,
	},
	{
		name: "El Classico",
		url: "https://dantasbeyer.github.io/El-Classico/",
		module: 1,
	},
	{
		name: "Bubble Party",
		url: "https://markixa.github.io/bubble-party/",
		module: 1,
		description: `This is a free simple version of bubble bursting game. Playing this game is very simple, it consist only to burst the bubbles that appear onscreen before they hit the ground. Everytime a bubble touches the ground, the player looses a life. Player has three lifes to spend. Every 30", more bubbles are born, and travel faster than before. A level is added up. With each bubble bursted, points are added to player's score.

    Simple as that. Just try to make more points this time, than before, and reach a higher level.`,
	},
	{
		name: "Space Bricks",
		url: "https://lukasbaur89.github.io/space-bricks/",
		module: 1,
		description:
			"SpaceBricks is a recreated browser game, originated from the most popular arcarde game Arnaknoid which was first built and published by Taito in 1986. The idea of my game is to have one player who has to destroy bricks using a ball and preventing it from falling off the playing field. The player wins the game when all bricks are destroyed. After that, a score is calculated based on the bricks the player destroyed. The player has three lives and looses the game if he misses to catch the ball with the platform.",
	},
	{
		name: "Ramen Master",
		url: "https://eugebr.github.io/ramen-master/",
		module: 1,
		description:
			"Ramen Master is a game where a single player needs to complete a ramen preparation by catching all five necessary ingredients, within a 30 senconds time frame.",
	},
	{
		name: "Memory Code",
		url: "https://ornella-e.github.io/Memory-code/",
		module: 1,
		description:
			"Memory Code is a dynamic game which consists of cards with different coding logos. The player has a board with 12 cards on one side and 1 card on the other side. Both will be shown one second each, first the one card and then the board. Everytime the player needs to guess which cards match.",
	},
];

async function seedDatabase() {
	try {
		//Wait for the deletion of all the Project and Students
		await Project.deleteMany();
		await Student.deleteMany();

		// Create all the projects and wait for the response of the db (the documents created)
		// and assign it the createdProjects variable
		const createdProjects = await Project.create(projects);

		console.log(`Created ${createdProjects.length} projects!`);
		const createdStudents = await Student.create(students);
		console.log(`Created ${createdStudents.length} students!`);

		for (let i = 0; i < createdStudents.length; i++) {
			const student = createdStudents[i];

			//Get the username of the user from the github link
			const username = student.username;
			// const regex = new RegExp(username);

			for (let j = 0; j < createdProjects.length; j++) {
				const project = createdProjects[j];
				// const found = regex.test(project.url);
				// includes return a boolean, if the username is or note included inside of the project.url String
				const found = project.url.includes(username);
				if (found) {
					// findByIdAndUpdate syntax respect it's name: put the Id then what you want to Update.
					// it returns the non-updated document, if you want the new one you need to give the {new: true} option.
					const updatedStudent = await Student.findByIdAndUpdate(
						student._id,
						{
							$push: { projects: project._id },
						},
						{ new: true }
					);
					console.log("updatedStudent", updatedStudent);
				}
			}
		}
		// close the connection once everything is done.
		await mongoose.connection.close();
	} catch (err) {
		console.error(err);
	}
}

seedDatabase();

// Please, use async / await (This is evil !)
function seedDatabaseThen() {
	Project.deleteMany()
		.then(() => {
			Student.deleteMany()
				.then(() => {
					Project.create(projects)
						.then((createdProjects) => {
							console.log(`Created ${createdProjects.length} projects!`);
							Student.create(students)
								.then((createdStudents) => {
									console.log(`Created ${createdStudents.length} students!`);

									for (let i = 0; i < createdStudents.length; i++) {
										const student = createdStudents[i];
										const username = student.github.slice(19).toLowerCase();
										for (let j = 0; j < createdProjects.length; j++) {
											const project = createdProjects[j];
											const found = project.url.includes(username);
											if (found) {
												Student.findByIdAndUpdate(
													student._id,
													{
														$push: { projects: project._id },
													},
													{ new: true }
												)
													.then((updatedStudent) => {
														console.log("updatedStudent", updatedStudent);
														mongoose.connection.close();
													})
													.catch((e) => console.error(e));
											}
										}
									}
								})
								.catch((e) => console.error(e));
						})
						.catch((e) => console.error(e));
				})
				.catch((e) => console.error(e));
		})
		.catch((e) => console.error(e));
}

function seedDatabaseThenWithChaining() {
	Project.deleteMany()
		.then(() => {
			return Student.deleteMany();
		})
		.then(() => {
			return Project.create(projects);
		})
		.then((createdProjects) => {
			console.log(`Created ${createdProjects.length} projects!`);
			return Student.create(students);
		})
		.then((createdStudents) => {
			console.log(`Created ${createdStudents.length} students!`);

			for (let i = 0; i < createdStudents.length; i++) {
				const student = createdStudents[i];
				const username = student.github.slice(19).toLowerCase();
				for (let j = 0; j < createdProjects.length; j++) {
					const project = createdProjects[j];
					const found = project.url.includes(username);
					if (found) {
						Student.findByIdAndUpdate(
							student._id,
							{
								$push: { projects: project._id },
							},
							{ new: true }
						)
							.then((updatedStudent) => {
								console.log("updatedStudent", updatedStudent);
								mongoose.connection.close();
							})
							.catch((e) => console.error(e));
					}
				}
			}
		})
		.catch((e) => console.error(e));
}
