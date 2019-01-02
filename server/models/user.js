'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    encrypted_password: DataTypes.STRING,
    reset_password_token: DataTypes.STRING,
    reset_password_sent_at: DataTypes.DATE,
    remember_created_at: DataTypes.DATE,
    sign_in_count: DataTypes.INTEGER,
    current_sign_in_at: DataTypes.DATE,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    disabled: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};