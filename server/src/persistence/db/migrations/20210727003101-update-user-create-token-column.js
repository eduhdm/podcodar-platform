'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Users', 'token', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('Users', 'token')])
  },
}
