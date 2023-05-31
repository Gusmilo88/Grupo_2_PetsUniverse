'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Order.belongsTo(models.User, {
        as: "user",
        foreignKey : "userId",
        onDelete : "cascade"
      });

      // Order.hasMany(models.Cart, {
      //   as: "carts",
      //   foreignKey: "orderId",
      //   onDelete : "cascade"
      // });

      Order.belongsToMany(models.Product, {
        as: "cart",
        through: "Cart",
        foreignKey: "orderId",
        otherKey: "productId",
      });

    }
  }
  Order.init({
    date: {type:DataTypes.DATE,defaultValue: new Date()},
    total: {type:DataTypes.INTEGER,defaultValue:0},
    userId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
      validate: {
        isIn: {
          args: [["pending", "completed", "canceled"]],
          msg: "Los valores válidos son: pending, completed, canceled"
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};