import express from "express";

import ogs from "open-graph-scraper";

const app = express();

app.get("/", async (req, res) => {
  const link = req.query.link as string;
  if (!link)
    return res.status(400).json({ success: false, error: "No link provided" });

  const graph = await ogs({ url: link, downloadLimit: false });

  return res.status(200).json(graph.result);
});

export default app;
