const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  text: {
    type: String, 
    maxlength: 250
  },
  stars: {
    type: Number
  }
})

const Comment = model('Comment', commentSchema);

module.exports = Comment;