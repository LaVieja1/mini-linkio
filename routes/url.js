const express = require("express");
const router = express.Router();

const {
  handleGenerateNewShortURL,
  handleGetNewShortURL,
} = require("../controllers/urlController");

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleGetNewShortURL);

module.exports = router;
