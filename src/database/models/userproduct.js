'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProduct.belongsTo(models.User, {
        as: "users",
        foreignKey : "userId",
        onDelete : "cascade"
      });

      UserProduct.belongsTo(models.Product, {
        as: "products",
        foreignKey : "productId",
        onDelete : "cascade"
      });

    }
  }
  UserProduct.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserProduct',
  });
  return UserProduct;
};