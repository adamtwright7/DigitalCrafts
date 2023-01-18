'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Employees', [{
    firstName: "Chester",
    lastName: "Brady",
    clinicId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    firstName: "Steven",
    lastName: "Gilbert",
    clinicId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    firstName: "Kelly",
    lastName: "Garrison",
    clinicId: 2,
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
