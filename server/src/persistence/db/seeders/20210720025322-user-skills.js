'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Skills',
      [
        {
          name: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'HasSkills',
      [
        {
          user_id: 1,
          skill_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          skill_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('HasSkills', null, {})
    await queryInterface.bulkDelete('Skills', null, {})
  },
}
