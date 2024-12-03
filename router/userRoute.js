const express = require("express");
const router = express.Router();
const { upload } = require("../config/multer");
const {
  signupUser,
  getAllUser,
  signInUser,
  getOneUser,
} = require("../controller/userController");

router.route("/signup").post(upload, signupUser);
router.route("/alluser").get(getAllUser);
router.route("/signin").post(signInUser);
router.route("/getoneuser/:id").get(getOneUser);

module.exports = router;
