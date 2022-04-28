const { model, Schema } = require("mongoose");

const favoriteSchema = new Schema({
	user_id: {
		type: Schema.Types.ObjectId,
		ref: "user",
	},
	tweet_id: {
		type: Schema.Types.ObjectId,
		ref: "tweet",
	},
});

const Favorites = model("favorite", favoriteSchema);

module.exports = Favorites;
