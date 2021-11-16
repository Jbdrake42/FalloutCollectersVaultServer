const { DataTypes } = require("sequelize");
const db = require("../db");
// Example UserTable Build this out Need more columns add it here
const Model = db.define("model", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  painter: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pic: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  ownerId:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Model;