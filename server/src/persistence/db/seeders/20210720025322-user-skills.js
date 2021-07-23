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
          userId: 1,
          skillId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          skillId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
