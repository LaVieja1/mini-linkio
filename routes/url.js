const express = require("express");
const router = express.Router();

const {
  handleGenerateNewShortURL,
  handleGetNewShortURL,
  handleGetAnalytics,
} = require("../controllers/urlController");

router.post("/", handleGenerateNewShortURL);

router.get("/:shortId", handleGetNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
