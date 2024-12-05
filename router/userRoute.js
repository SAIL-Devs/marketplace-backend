const express = require("express");
const router = express.Router();
const { upload } = require("../config/multer");
const {
  signupUser,
  getAllUser,
  signInUser,
  getOneUser,
  updateUser,
} = require("../controller/userController");

router.route("/signup").post(upload, signupUser);
router.route("/updateprofile").patch(updateUser);
router.route("/alluser").get(getAllUser);
router.post("/signin", signInUser);
router.route("/getoneuser/:id").get(getOneUser);

module.exports = router;
