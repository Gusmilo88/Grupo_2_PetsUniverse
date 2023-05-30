'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        as: "categories",
        foreignKey : "categoryId",
        onDelete : "cascade"
      });

      Product.belongsTo(models.ProductType, {
        as: "productTypes",
        foreignKey : "productTypeId",
        onDelete : "cascade"
      });

      Product.hasMany(models.Cart, {
        as: "carts",
        foreignKey : "productId",
        onDelete : "cascade"
      });

      Product.hasMany(models.UserProduct, {
        as: "usersProducts",
        foreignKey : "productId",
        onDelete : "cascade"
      });

      Product.belongsToMany(models.Order, {
        as: "cart",
        through: "Cart",
        foreignKey: "productId",
        otherKey: "orderId",
      });
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
  sequelizePaginate.paginate(Product)
  return Product;
};