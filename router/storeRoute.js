const express = require("express");
const { productUpload } = require("../config/multer");
const { createProduct, getAllProducts } = require("../controller/storeController");
const router = express.Router();

router.route("/newproduct/:id").post(productUpload, createProduct);
router.route("/allproducts").get(getAllProducts);

module.exports = router; 