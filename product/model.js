const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../user/model.js");

const Product = db.define(
  "product",
  {
    title: {
      type: Sequelize.STRING,
      field: "title"
      //   allowNull: false
    },
    imageUrl: {
      type: Sequelize.TEXT,
      field: "image_url"
    },
    description: {
      type: Sequelize.TEXT, // it is TEXT because it may contain many characters
      field: "description"
    },
    price: {
      type: Sequelize.DECIMAL, //postgres doesn't speak float
      field: "price"
      //   allowNull: false
    }
  },
  { timestamps: false }
);

// Product.hasMany(Image);
Product.belongsTo(User);

module.exports = Product;
