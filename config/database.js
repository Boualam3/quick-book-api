const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // file-based storage
  logging: false, // disable SQL logging for cleaner output
});

module.exports = sequelize;
