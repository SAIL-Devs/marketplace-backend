const userModel = require("../model/userModel");
const cloudinery = require("../config/cloudinery");
const bcrypt = require("bcrypt");

const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const cloudImage = await cloudinery.uploader.upload(req.file.path);
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      username,
      email,
      password: hash,
      avatar: cloudImage.secure_url,
      avatarID: cloudImage.public_id,
    });

    res.status(201).json({
      message: "User created Sucessfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to Sign Up User",
      data: error.message,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const getUser = await userModel.find();
    res.status(200).json({
      message: "User gotten Sucessfully",
      data: getUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to get User",
      data: error.message,
    });
  }
};

module.exports = { signupUser, getAllUser };
