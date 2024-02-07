const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB);
  console.log("DB CONNECTED");
}

const PORT = process.env.PORT;
const app = express();

// ROUTES IMPORT
const urlRoute = require("./routes/url");
const indexRoute = require("./routes/index");

//MIDDLEWARE
app.use(express.json());

// VIEW ENGINE
app.set("view engine", "ejs");

//ROUTE MIDDLEWARE
app.use("/url", urlRoute);
app.use("/", indexRoute);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
