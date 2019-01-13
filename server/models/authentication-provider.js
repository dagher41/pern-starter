
module.exports = (sequelize, DataTypes) => {
  const PROVIDERS = {
    facebookToken: 'facebook_token'
  };
  const AuthenticationProvider = sequelize.define('AuthenticationProvider', {
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    authorizationToken: {
      type: DataTypes.STRING,
      field: 'authorization_token'
    },
    payload: {
      type: DataTypes.JSONB
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
      field: 'updated_at'
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    tableName: 'authentication_providers'
  });
  AuthenticationProvider.associate = (models) => {
    AuthenticationProvider.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  AuthenticationProvider.providers = () => { return PROVIDERS; };

  return AuthenticationProvider;
};
