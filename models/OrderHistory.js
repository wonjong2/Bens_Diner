const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderHistory extends Model {}

OrderHistory.init(
  {
    // Order Id Number
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //List of menu choices as a concatinated string
    item_list: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    //User Id to which the order belongs to
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderHistory',
  }
);

module.exports = OrderHistory;
