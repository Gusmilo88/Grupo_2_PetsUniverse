'use strict';

/** @type {import('sequelize-cli').Migration} */

const usuarioJson = require('../../data/users.json')







const usuarios = usuarioJson.map(({firstName,lastName,email,password,avatar,roleId,addressId})=>{
  return{
  firstName,
  lastName,
email,
password,
avatar,
roleId,
addressId,

createdAt: new Date(),
updatedAt: new Date(),

}

})








module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Users', usuarios, {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Users', null, {});
    
  }
};