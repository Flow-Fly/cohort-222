// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const model = mongoose.model;

const { model, Schema } = require("mongoose");

// Creating the Schema
const studentSchema = new Schema({
	name: String,
	github: {
		type: String,
		required: true,
	},
	// We can add some check to our field (should it be unique? Is it required...?)
	hasPets: Boolean,
	petsNames: [String],
	// projects is an Array of ObjectId referencing to the project collection.
	projects: [
		{
			type: Schema.Types.ObjectId,
			ref: "project",
		},
	],
});

// Creating the model
const Student = model("student", studentSchema);
// Exporting the model
module.exports = Student;
