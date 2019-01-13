'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserImage = sequelize.define('UserImage', {
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    url: DataTypes.TEXT,
    status: DataTypes.INTEGER
  }, {
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    tableName: 'user_images'
  });
  UserImage.associate = models => {
    UserImage.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return UserImage;
};
