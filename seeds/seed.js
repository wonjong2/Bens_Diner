const sequelize = require('../config/connection');
const { User, OrderHistory, Menu, Categories } = require('../models');

const userData = require('./userData.json');
const menuData = require('./menuData.json');
const orderHistoryData = require('./orderHistoryData.json');
const categoryData = require('./categoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //Loads the userData with the User model into the restaurants_db
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //Loads the categoryData with the Categories model into the restaurants_db
  for (const category of categoryData) {
    await Categories.create({
      ...category
    });
  }

  //Loads the orderHistoryData with the OrderHistory model into the restaurants_db
  for (const orders of orderHistoryData) {
    await OrderHistory.create({
      ...orders
    });
  }

  //Loads the categoryData with the category model into the restaurants_db
  for (const dish of menuData) {
    await Menu.create({
      ...dish
    });
  }

  process.exit(0);
};

seedDatabase();
