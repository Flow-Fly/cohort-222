const { model, Schema } = require("mongoose");

const projectSchema = new Schema({
	// author: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "student",
	// },
	name: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		default: "No URL provided :(",
	},
	description: {
		type: String,
		default: "No description provided :(",
	},
	module: Number,
});

const Project = model("project", projectSchema);

module.exports = Project;
