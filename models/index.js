const User = require("./user");
const Model = require("./model");
const Vault = require("./vault");
const Blog = require("./blog");
// create individual files for your models and import them here

// Setup Associations

module.exports = {
  User, Model, Vault, Blog
};
