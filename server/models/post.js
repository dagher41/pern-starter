'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    slug: DataTypes.STRING,
    cuid: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};