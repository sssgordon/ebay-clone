const Sequelize = require("sequelize");
const db = require("../db");

const Image = db.define(
  "image",
  {
    url: {
      type: Sequelize.TEXT,
      field: "url"
      //   allowNull: true
    }
  },
  { timestamps: false }
);

module.exports = Image;
