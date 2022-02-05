var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/select-food", function (req, res, next) {
  res.render("food", { nom: req.query.type });
});

module.exports = router;
