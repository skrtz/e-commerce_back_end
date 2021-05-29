const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { hasMany } = require('./Product.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
Category.hasMany(Product, { foreignKey: 'category_id' });

module.exports = Category;
