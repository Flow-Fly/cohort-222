const mongoose = require("mongoose");
require("dotenv").config();

// console.log(process.env.MONGO_URI);

mongoose
	.connect(process.env.MONGO_URI)
	.then((db) => console.log(`Connected to ${db.connection.name}`))
	.catch((e) => console.log(e.message));
