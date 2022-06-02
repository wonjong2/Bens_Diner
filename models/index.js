const User = require("./User");
const Menu = require("./Menu");
const OrderHistory = require("./OrderHistory");
const Categories = require("./Categories");

User.hasMany(OrderHistory, {
  foreignKey: "user_id",
});

OrderHistory.belongsTo(User, {
  foreignKey: "user_id",
});

Menu.belongsTo(Categories, {
  foreignKey: "category_id",
});

Categories.hasMany(Menu, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

module.exports = { User, Menu, OrderHistory, Categories };
