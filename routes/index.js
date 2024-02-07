const express = require("express");
const router = express.Router();

const URL = require("../models/url");

router.get("/", async (req, res) => {
  const shortUrls = await URL.find();
  res.render("index", { shortUrls: shortUrls });
});

module.exports = router;
