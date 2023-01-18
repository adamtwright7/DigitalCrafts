'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     * // stuff in here is schema AKA column headers   
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Pets', [{
      name: 'Greenie',
      type: 'green anole',
      owner: "adamTwright",
      age: "1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Abcde',
      type: 'leopard geco',
      owner: "adamTwright",
      age: "2",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bacon Bits Wright',
      type: 'doggo',
      owner: "adamTwright",
      age: "14",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
