
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
      encryptedPassword: {
        type: Sequelize.STRING,
        field: 'encrypted_password'
      },
      resetPasswordToken: {
        type: Sequelize.STRING,
        field: 'reset_password_token'
      },
      resetPasswordSentAt: {
        type: Sequelize.DATE,
        field: 'reset_password_sent_at'
      },
      rememberCreatedAt: {
        type: Sequelize.DATE,
        field: 'remember_created_at'
      },
      signInCount: {
        type: Sequelize.INTEGER,
        field: 'sign_in_count',
        defaultValue: 0
      },
      currentSignInAt: {
        type: Sequelize.DATE,
        field: 'current_sign_in_at'
      },
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name'
      },
      disabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
      return queryInterface.addIndex('users', ['email'], {
        type: 'UNIQUE',
        unique: true
      });
    });
  },
  down: (queryInterface) => {
    return Promise.all([
      queryInterface.dropTable('Users'),
      queryInterface.removeIndex('users', ['email'])
    ]);
  }
};
