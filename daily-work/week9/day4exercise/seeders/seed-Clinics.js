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
   await queryInterface.bulkInsert('Clinics', [{
    clinicName: "The Unknown",
    location: "Fowl Inn",
    size: "Medium",
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    clinicName: "The Good Yak",
    location: "Main Street",
    size: "Small",
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    clinicName: "The Loud Vampire",
    location: "Ol Svalich",
    size: "Large",
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
