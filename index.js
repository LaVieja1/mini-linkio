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

//MIDDLEWARE
app.use(express.json());

//ROUTE MIDDLEWARE
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
