"use strict";

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
      "user",
      [
        {
          email: "John Doe1",
          username: "fake1",
          password: "123",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "John Doe2",
          username: "fake2",
          password: "123",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "John Doe3",
          username: "fake3",
          password: "123",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
