
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('authentication_providers', {
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
      authorizationToken: {
        type: Sequelize.TEXT,
        field: 'authorization_token'
      },
      payload: {
        type: Sequelize.JSONB
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
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
    })
    .then(() => {
      return queryInterface.addIndex('authentication_providers', ['user_id']);
    });
  },
  down: (queryInterface) => {
    return Promise.all([
      queryInterface.dropTable('authentication_providers'),
      queryInterface.removeIndex('authentication_providers', ['user_id'])
    ]);
  }
};
