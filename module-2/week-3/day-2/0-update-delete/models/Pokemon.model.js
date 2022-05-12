const { Schema, model } = require('mongoose');

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 0
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
})

const Pokemon = model('Pokemon', pokemonSchema);

module.exports = Pokemon;