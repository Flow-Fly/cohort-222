//! Basic Configuration
const express = require("express");
const hbs = require("hbs");
const app = express();
//? Connect to the database
require("./config/mongo");

//! Configure my app
/**
 * ? This is bet default to '/views', you can set it to '/toto'
 * ? If you want
 */
app.set("views", __dirname + "/views");
//? Static assets which are located in '/public'
app.set("view engine", "hbs");
app.use(express.static("public"));
//? Set partials location
hbs.registerPartials(__dirname + "/views/partials");

/**
 ** Retrieve the payload of a POST request
 ** and display it in Object with key-values pairs
 ** display it under request.body
 */
app.use(express.urlencoded({ extended: true }));

const Student = require("./models/student.model");
const Project = require("./models/project.model");

app.get("/", (req, res) => {
	res.render("home");
});

//! This route would prevent us from accessing other routes
//! Defined later on, like '/students', '/search'
// app.get("/:something", (req, res) => {
// 	res.send("Oh no !");
// });

//! Query all of the students from the db and display them
app.get("/students", async (req, res) => {
	try {
		const allStudents = await Student.find();
		console.log(allStudents.length);
		res.render("students/list-students", { allStudents });
	} catch (e) {
		console.error(e);
	}
});

//! Receive a req.query and perform a search the username in the database.
app.get("/search", async (req, res) => {
	const { q } = req.query;
	try {
		const searchResults = await Student.find({ username: { $regex: q } });
		console.log(searchResults);
		res.render("students/list-students", { allStudents: searchResults });
	} catch (e) {
		console.error(e);
	}
});

//! This route is not protected agains wrong id, yet.
//! It has access to req.params, the key is whatever has been
//! written after the ":"
app.get("/students/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const oneStudent = await Student.findById(id);
		console.log(oneStudent);
		res.render("students/one-student", { oneStudent });
	} catch (e) {
		console.error(e);
	}
});

//! Display a form
app.get("/student/create", (req, res) => {
	res.render("students/create-student");
});

//! Receive a post request (coming from a form)
//! The values from the form are found under request.body,
//! Their keys are coming from the "name" attribute of the input inside of the form.
app.post("/student/create", async (req, res) => {
	let { name, github, hasPets } = req.body;
	hasPets = hasPets === "yes" ? true : false;
	try {
		const createdStudent = await Student.create({
			name,
			github,
			hasPets,
		});
		console.log(createdStudent);
		// res.redirect(`/students/`);
		res.redirect(`/students/${createdStudent._id}`);
	} catch (e) {
		console.error(e.message);
	}
});

app.listen(process.env.PORT, () =>
	console.log(`Server 🏃 on http://localhost:${process.env.PORT}`)
);
