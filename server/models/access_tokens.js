
module.exports = (sequelize, DataTypes) => {
  const AccessToken = sequelize.define('AccessToken', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: 'users',
        key: 'id'
      },
      field: 'user_id'
    },
    token: {
      type: DataTypes.STRING
    },
    expiresAt: {
      type: DataTypes.DATE,
      field: 'expires_at'
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
    tableName: 'access_tokens'
  });
  AccessToken.associate = models => {
    AccessToken.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return AccessToken;
};
