'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Carts', [{
       quantity:1,
       productId:3,
       orderId:1,
       createdAt:new Date(),
       updatedAt:new Date()
     },

     {
      quantity:1,
      productId:5,
      orderId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    }
    
    
    
    
    
    
    
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Carts', null, {});
    
  }
};
