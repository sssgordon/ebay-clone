const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      field: "email"
    },
    phoneNumber: {
      type: Sequelize.INTEGER,
      field: "phone_number"
    }
  },
  { tableName: "users", timestamps: false }
);

module.exports = User;
