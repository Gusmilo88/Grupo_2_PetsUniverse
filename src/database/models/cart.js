'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Product, {
        as: "products",
        foreignKey : "productId",
        onDelete : "cascade"
      });

      Cart.belongsTo(models.Order, {
        as: "orders",
        foreignKey : "orderId",
        onDelete : "cascade"
      });
      
    }
  }
  Cart.init({
    quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};