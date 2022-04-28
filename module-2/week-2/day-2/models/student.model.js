// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const model = mongoose.model;

const { model, Schema } = require("mongoose");

const studentSchema = new Schema({
	name: String,
	github: {
		type: String,
		required: true,
	},
	hasPets: Boolean,
	petsNames: [String],
	projects: [
		{
			type: Schema.Types.ObjectId,
			ref: "project",
		},
	],
});

const Student = model("student", studentSchema);

module.exports = Student;
