'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('UserProducts', [{
        userId:5,
        productId:3,
        createdAt:new Date(),
        updatedAt:new Date()

      },

      {
        userId:2,
        productId:5,
        createdAt:new Date(),
        updatedAt:new Date()

      }
    
    
    
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('UserProducts', null, {});
    
  }
};
