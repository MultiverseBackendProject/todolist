'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('todos', 'createdBy', {
      type: Sequelize.STRING,
      allowNull: true, // or false, depending on your requirements
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('todos', 'createdBy');
  },
};

//this file exists because of updating our db schema/model - had to add this type for work in assocation data/tier 5 reqs