require("../config/mongo");

const Student = require("../models/student.model");

(() => {
	Student.find({ hasPets: true })
		.then((studentWithPets) => {
			studentWithPets.forEach((student) => {
				Student.findByIdAndDelete(student._id)
					.then((response) => {
						console.log(response);
					})
					.catch((e) => console.error(e));
			});
		})
		.catch((err) => console.error(err));
})();
