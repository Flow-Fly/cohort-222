const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost/squad-222")
	.then((db) => console.log("Connected to " + db.connection.name))
	.catch((err) => console.error(err));
