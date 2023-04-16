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
      // User.hasMany(models.Role, {
      //   as: "roles",
      //   foreignKey : "roleId",
      //   onDelete : "cascade"
      // });

      // User.hasMany(models.Address, {
      //   as: "Addresses",
      //   foreignKey : "AddressId",
      //   onDelete : "cascade"
      // })

      // User.belongsTo(models.UserProduct, {
      //   as: "usersProducts",
      //   onDelete : "cascade"
      // })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};