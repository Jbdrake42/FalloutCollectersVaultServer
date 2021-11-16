const { DataTypes } = require("sequelize");
const db = require("../db");
const Blog = db.define("blog", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  blogbody: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  notes: {
      type: DataTypes.STRING,
      allowNull: true
  },
  ownerId:{
      type: DataTypes.INTEGER
  }
})
module.exports = Blog;
