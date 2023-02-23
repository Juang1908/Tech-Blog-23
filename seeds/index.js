// SEEDS
const seedComments = require('./Comment-seeds');
const seedUser = require('./User-seeds');
const seedPost = require('./Post-seeds');

// import our database connection from config.js
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');
  await seedPost();
  console.log('\n----- POSTS SEEDED -----\n');
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
