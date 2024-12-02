const cloudinery = require("cloudinary").v2;
require("dotenv").config();

cloudinery.config({
  cloud_name: process.env.cloud_name,
  api_key: 871341554644239,
  api_secret: process.env.api_secret,
  secure: true,
});

module.exports = cloudinery;
