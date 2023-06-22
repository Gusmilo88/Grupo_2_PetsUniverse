'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('ProductTypes', [{
        name: 'alimento',
        createdAt:new Date(),
        updatedAt:new Date()
        
      },

      {
        name: 'juguetes',
        createdAt:new Date(),
        updatedAt:new Date()
        
      }

      ,

      {
        name: 'salud',
        createdAt:new Date(),
        updatedAt:new Date()
        
      }
    
    
    
    
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('ProductTypes', null, {});
     
  }
};