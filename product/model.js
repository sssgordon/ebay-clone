const Sequelize = require("sequelize");
const db = require("../db");
// const User = require('../user/model.js')

const Product = db.define(
  "product",
  {
    title: {
      type: Sequelize.STRING,
      field: "title",
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      field: "description"
    },
    picture: {
      type: Sequelize.STRING,
      field: "picture_url",
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      field: "price",
      allowNull: false
    }
  },
  { timestamps: false }
);

// Product.belongsTo(User)

module.exports = Product;
