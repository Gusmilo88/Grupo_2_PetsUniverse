'use strict';

/** @type {import('sequelize-cli').Migration} */


const direccionesJson = require('../../data/adresses.json')







const direcciones = direccionesJson.map(({address,city,province,zipcode})=>{
  return{
  address,
  city,
province,
zipcode,
createdAt: new Date(),
updatedAt: new Date(),

}

})





module.exports = {
  async up (queryInterface, Sequelize) {
    
    
      await queryInterface.bulkInsert(
        'Addresses',direcciones,{}
        
        );
        
        
  },

  async down (queryInterface, Sequelize) {
    
   
     await queryInterface.bulkDelete('Addresses', null, {});
     
  }
};