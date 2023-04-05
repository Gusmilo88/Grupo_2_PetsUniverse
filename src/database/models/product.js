'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Category, {
        as: "categories",
        foreignKey : "categoryId",
        onDelete : "cascade"
      })

      Product.hasMany(models.ProductType, {
        as: "productTypes",
        foreignKey : "productTypeId",
        onDelete : "cascade"
      })

      Product.belongsTo(models.Cart, {
        as: "carts",
        onDelete : "cascade"
      });

      Product.belongsTo(models.UserProduct, {
        as: "usersProducts",
        onDelete : "cascade"
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    image: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    productTypeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};