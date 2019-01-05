'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'users',
          key: 'id'
        },
        field: 'user_id'
      },
      url: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        field: 'updated_at'
      }
    }).then(() => queryInterface.addIndex('user_images', ['user_id']));
  },
  down: (queryInterface) => {
    return Promise.all([
      queryInterface.dropTable('UserImages'),
      queryInterface.removeIndex('user_images', ['user_id'])
    ]);
  }
};
