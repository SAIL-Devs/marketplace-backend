const express = require("express");
require("dotenv").config();
require("./config/db");
const userRoute = require("./router/userRoute");
const storeRoute = require("./router/storeRoute");
const cors = require("cors");

const PORT = process.env.PORT || 2024;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is uP and Running 🚀🚀🚀",
  });
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/store", storeRoute);

app.listen(PORT, () => {
  console.log("Server is Up on " + PORT);
});
