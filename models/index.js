const User = require('./User');
const Menu = require('./Menu');
const OrderHistory = require('./OrderHistory');
const Categories = require('./Categories');

User.hasMany(OrderHistory, {
  foreignKey: 'user_id',
});

OrderHistory.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Menu, OrderHistory, Categories };
