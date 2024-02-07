const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const PORT = process.env.PORT;
const app = express();

// ROUTES IMPORT
const urlRoute = require("./routes/url");
const indexRoute = require("./routes/index");

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// VIEW ENGINE
app.set("view engine", "ejs");

//ROUTE MIDDLEWARE
app.use("/url", urlRoute);
app.use("/", indexRoute);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
});
