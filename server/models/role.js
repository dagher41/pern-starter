
module.exports = (sequelize, DataTypes) => {
  const types = {
    admin: 'RTC01',
    client: 'RTC02'
  };

  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    code: {
      type: DataTypes.STRING,
      primaryKey: true
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
    tableName: 'roles'
  });
  Role.associate = (models) => {
    Role.hasMany(models.UserRole, { foreignKey: 'role_code' });
    Role.belongsToMany(models.User, { through: models.UserRole, foreignKey: 'role_code' });
  };

  Role.types = () => {
    return types;
  };

  return Role;
};
