'use strict';
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('Role', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  roles.associate = function(models) {
    // associations can be defined here
  };
  return roles;
};