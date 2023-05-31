'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.belongsTo(models.Address, {
        as: "addresses",
        foreignKey : "addressId",
        onDelete : "cascade"
      });

      User.belongsTo(models.Role, {
        as: "roles",
        foreignKey : "roleId",
        onDelete : "cascade"
      });

      // User.hasMany(models.Order, {
      //   as: "orders",
      //   foreignKey : "userId",
      //   onDelete : "cascade"
      // });

      User.hasMany(models.UserProduct, {
        as: "userProducts",
        foreignKey : "userId",
        onDelete : "cascade"
      });

      User.hasMany(models.Order, {
        as: "orders",
        foreignKey : "userId",
        onDelete : "cascade"
      });

    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    socialId: DataTypes.STRING,
    socialProvider: DataTypes.STRING,
    roleId: {type: DataTypes.INTEGER, defaultValue: 2},
    addressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};