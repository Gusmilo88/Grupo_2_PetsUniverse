'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Orders', [{
        date:new Date(),
        total:7700,
        userId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },

      {
        date:new Date(),
        total:8100,
        userId:2,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    
    
    
    
    
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Orders', null, {});
     
  }
};
