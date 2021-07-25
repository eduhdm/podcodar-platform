'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Mentorships',
      [
        {
          mentor_id: 1,
          apprentice_id: 2,
          accepted: 'false',
          days_duration: 14,
          start_date: null,
          end_date: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Mentorships', null, {})
  },
}
