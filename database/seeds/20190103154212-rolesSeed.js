module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      { name: 'Admin', code: 'RTC01', created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP(3)') },
      { name: 'Client', code: 'RTC02', created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP(3)') }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
