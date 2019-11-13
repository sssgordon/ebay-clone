const { Router } = require("express");
const User = require("./model");
const router = new Router();

//CRUD
router.post("/users", (req, res, next) => {
  User.create(req.body)
    .then(newUser => res.send(newUser))
    .catch(next);
});

module.exports = router;
