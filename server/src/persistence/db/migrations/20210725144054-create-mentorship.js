'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mentorships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mentor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      apprentice_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      accepted: {
        type: Sequelize.BOOLEAN,
      },
      days_duration: {
        type: Sequelize.INTEGER,
      },
      start_date: {
        type: Sequelize.DATE,
      },
      end_date: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Mentorships')
  },
}
