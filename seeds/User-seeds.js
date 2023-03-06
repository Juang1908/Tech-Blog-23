const { User } = require('../models');

const userData =
 [
  {
    'username': 'juang',
    'password': 'password123'
  },
  {
    'username': 'gjuan',
    'password': 'password456'
  },
  {
    'username': 'bobsmith',
    'password': 'password789'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
