const { Router } = require("express");
const Product = require("./model");
const router = new Router();
// const User =

//CRUD
router.get("/products", (req, res, next) => {
  //
  Product.findAll() //later {include: [User]}
    .then(products => res.json(products))
    .catch(next);
});

router.get("/product/:productId", (req, res, next) => {
  Product.findByPk(req.params.productId) //later: , {include: [User]}
    .then(product => {
      if (product) {
        res.json(product);
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

router.post("/product", (req, res, next) => {
  Product.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch(next);
});

module.exports = router;
