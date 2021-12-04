var express = require("express");
var router = express.Router();

const { getProducts } = require("../controllers/product");

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get("/", function (req, res, next) {
  const { q } = req.query;
  const productos = getProducts(q);
  res.send(productos);
});

module.exports = router;
