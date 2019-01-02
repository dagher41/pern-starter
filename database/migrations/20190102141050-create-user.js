'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      encrypted_password: {
        type: Sequelize.STRING
      },
      reset_password_token: {
        type: Sequelize.STRING
      },
      reset_password_sent_at: {
        type: Sequelize.DATE
      },
      remember_created_at: {
        type: Sequelize.DATE
      },
      sign_in_count: {
        type: Sequelize.INTEGER
      },
      current_sign_in_at: {
        type: Sequelize.DATE
      },
      fname: {
        type: Sequelize.STRING
      },
      lname: {
        type: Sequelize.STRING
      },
      disabled: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};