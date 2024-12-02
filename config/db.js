const mongoose = require("mongoose");
const mongoURI = process.env.LOCAL_MONGO_URI;

mongoose.connect(mongoURI);
mongoose.connection
  .on("open", () => {
    console.log("Database Connected");
  })
  .once("error", () => {
    console.log("Failed to connect to database");
  });

module.exports = mongoose;
