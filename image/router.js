const { Router } = require("express");
const Image = require("./model");
const router = new Router();

//CRUD
router.post("/images", (req, res, next) => {
  Image.create(req.body)
    .then(newImage => res.send(newImage))
    .catch(next);
});

module.exports = router;
