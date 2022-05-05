const comments = require('../data/comments');
const Comment = require('../models/Comment.model');

require('../db');


const seedComments = async () => {
  try {
    await Comment.create(comments);
    console.log(`${comments.length} created`);
  } catch (error) {
    console.error(error);
  }
}

seedComments();