const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      field: "email",
      allowNull: false
    },
    phoneNumber: {
      type: Sequelize.INTEGER,
      field: "phone_number",
      allowNull: false
    }
  },
  { tableName: "users", timestamps: false }
);

module.exports = User;
