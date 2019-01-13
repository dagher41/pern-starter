'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_roles', {
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
      roleCode: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'roles',
          key: 'code'
        },
        field: 'role_code'
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
      return queryInterface.addIndex('user_roles', ['user_id']);
    });
  },
  down: (queryInterface) => {
    return Promise.all([
      queryInterface.dropTable('user_roles'),
      queryInterface.removeIndex('user_roles', ['user_id'])
    ]);
  }
};
