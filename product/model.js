const Sequelize = require("sequelize");
const db = require("../db");
// const User = require('../user/model.js')

const Product = db.define(
  "product",
  {
    title: {
      type: Sequelize.STRING,
      field: "title"
    },
    description: {
      type: Sequelize.STRING,
      field: "description"
    },
    picture: {
      type: Sequelize.STRING,
      field: "picture_url"
    },
    price: {
      type: Sequelize.FLOAT,
      field: "price"
    }
  },
  { timestamps: false }
);

// Product.belongsTo(User)

module.exports = Product;
