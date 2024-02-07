const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  const shortID = nanoid(8);

  if (!body.fullUrl) {
    return res.status(400).json({ error: "URL is required" });
  }

  await URL.create({
    shortId: shortID,
    redirectURL: body.fullUrl,
    visitHistory: [],
  });

  res.redirect("/");
}

async function handleGetNewShortURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId: shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  return res.redirect(entry.redirectURL);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });

  return res.json({
    totlaClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetNewShortURL,
  handleGetAnalytics,
};
