'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users', // table name
        'bioDescription', // new field name
        {
          type: Sequelize.TEXT,
          allowNull: true,
        }
      ),
      queryInterface.addColumn('Users', 'photoUrl', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'bioDescription'),
      queryInterface.removeColumn('Users', 'photoUrl'),
    ])
  },
}
