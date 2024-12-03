const express = require("express");
const { productUpload } = require("../config/multer");
const { createProduct } = require("../controller/storeController");
const router = express.Router();

router.route("/newproduct/:id").post(productUpload, createProduct);

module.exports = router;
