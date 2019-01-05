'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('access_tokens', {
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
      token: {
        type: Sequelize.STRING
      },
      expiresAt: {
        type: Sequelize.DATE,
        field: 'expires_at'
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
    }).then(() => {
      return Promise.all([
        queryInterface.addIndex('access_tokens', ['user_id']),
        queryInterface.addIndex('access_tokens', ['token'])
      ]);
    });
  },
  down: (queryInterface) => {
    return Promise.all([
      queryInterface.dropTable('access_tokens'),
      queryInterface.removeIndex('access_tokens', ['user_id']),
      queryInterface.removeIndex('access_tokens', ['tokens'])
    ]);
  }
};
