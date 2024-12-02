const express = require("express");
const router = express.Router();
const { upload } = require("../config/multer");
const { signupUser, getAllUser } = require("../controller/userController");

router.route("/signup").post(upload, signupUser);
router.route("/alluser").get(getAllUser);

module.exports = router;
