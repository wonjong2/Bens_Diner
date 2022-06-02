const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Menu extends Model {}

Menu.init(
  {
    // Unique ID for the menu item
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Name of the menu item
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Description + ingredients of the menu item
    description: {
      type: DataTypes.STRING,
    },
    // Price of the menu item
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // Foreign ID for the category it falls under
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "menu",
  }
);

module.exports = Menu;
