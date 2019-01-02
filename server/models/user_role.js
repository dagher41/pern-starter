'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_roles = sequelize.define('UserRole', {
    user_id: DataTypes.INTEGER
  }, {});
  user_roles.associate = function(models) {
    user_roles.belongsTo(models.User)
    user_roles.belongsTo(models.Role)
  };
  return user_roles;
};