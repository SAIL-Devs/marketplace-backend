const cloudinery = require("cloudinary").v2;
require("dotenv").config();

cloudinery.config({
  cloud_name: "samolorunda",
  api_key: "871341554644239",
  api_secret: "Mt_S1riHhh5g9plWHVdpiHyyv58",
  secure: true,
});

module.exports = cloudinery;
