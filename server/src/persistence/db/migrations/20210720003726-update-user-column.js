'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Users', 'bio_description', {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
      queryInterface.addColumn('Users', 'photo_url', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'bio_description'),
      queryInterface.removeColumn('Users', 'photo_url'),
    ])
  },
}
