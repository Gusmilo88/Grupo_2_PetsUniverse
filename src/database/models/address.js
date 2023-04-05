'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User, {
        as: "users",
        onDelete : "cascade"
      })
    }
  }
  Address.init({
    address: DataTypes.STRING(255),
    city: DataTypes.STRING(255),
    province: DataTypes.STRING(255),
    zipcode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};