'use strict';

/** @type {import('sequelize-cli').Migration} */



const bcryptjs = require('bcryptjs')


module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Users', usuarios, {},[
{
  firstName : "Admin",
  lastName : "Test",
email : "admin@test.com",
password : bcryptjs.hashSync('123123',10),
avatar : null,
roleId : 1,
addressId : 1,
createdAt: new Date(),
updatedAt: new Date(),

},

      ],
      {}
      )
    },










  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Users', null, {});
    
  }
};
