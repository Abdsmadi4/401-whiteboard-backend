"use strict";

const Post = (sequelize, DataTypes) =>
  sequelize.define("Post", {
    postTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Post;
