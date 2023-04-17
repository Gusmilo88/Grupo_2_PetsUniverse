'use strict';

/** @type {import('sequelize-cli').Migration} */

const productosJson = require('../../data/products.json')







const productos = productosJson.map(({name,description,price,discount,image,weight,stock,categoryId,productTypeId})=>{
  return{
 name,
 description,
 price,
 discount,
 image,
 weight,
 stock,
 categoryId,
 productTypeId,

createdAt: new Date(),
updatedAt: new Date(),

}

})











module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Products',productos , {});
   
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Products', null, {});
     
  }
};
