
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    encryptedPassword: {
      type: DataTypes.STRING,
      field: 'encrypted_password'
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      field: 'reset_password_token'
    },
    resetPasswordSentAt: {
      type: DataTypes.DATE,
      field: 'reset_password_sent_at'
    },
    rememberCreatedAt: {
      type: DataTypes.DATE,
      field: 'remember_created_at'
    },
    signInCount: {
      type: DataTypes.INTEGER,
      field: 'sign_in_count',
      defaultValue: 0
    },
    currentSignInAt: {
      type: DataTypes.DATE,
      field: 'current_sign_in_at'
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name'
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  },
    {
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      tableName: 'users'
    });

  User.associate = models => {
    User.hasMany(models.UserRole, { foreignKey: 'user_id' });
    User.belongsToMany(models.Role, { through: models.UserRole, foreignKey: 'user_id' });
    User.hasMany(models.AuthenticationProvider, { foreignKey: 'user_id' });
    User.hasMany(models.UserImage, { foreignKey: 'user_id' });
    User.hasMany(models.UserImage, {
      foreignKey: 'user_id',
      scope: {
        status: '1'
      },
      as: {
        singular: 'activeImage',
        plural: 'activeImages'
      }
    });
  };
  return User;
};
