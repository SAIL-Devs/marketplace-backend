const mongoose = require("mongoose");
const mongoURI = process.env.LOCAL_MONGO_URI;

const db_pass = process.env.db_pass;
const db_user = process.env.db_user;
const db_name = process.env.db_name;
const uri = `mongodb+srv://${db_user}:${db_pass}@cluster0.8x56a.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri);
mongoose.connection
  .on("open", () => {
    console.log("Database Connected");
  })
  .once("error", () => {
    console.log("Failed to connect to database");
  });

module.exports = mongoose;
