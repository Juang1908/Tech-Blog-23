const { Comment } = require('../models');

const commentData = [
  {
    content: "Great post! Thanks for sharing.",
    user_id: 1,
    post_id: 1
  },
  {
    content: "I totally agree with you.",
    user_id: 2,
    post_id: 1
  },
  {
    content: "This is really helpful information.",
    user_id: 3,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;