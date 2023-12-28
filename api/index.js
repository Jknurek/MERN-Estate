const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("error connecting to database"));
