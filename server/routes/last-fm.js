const express = require("express");
const api = require("../utils/axios-instances-external");

const router = express.Router();

router.get("/artist", async (req, res) => {
  const { artista } = req.query;

  try {
    const response = await api.get("/?method=artist.search", {
      params: {
        artist: artista,
        format: "json",
      },
    });

    res.status(200).send(response.data.results.artistmatches.artist);
  } catch (error) {
    res.status(error.response.status).send(error);
  }
});

router.get("/album", async (req, res) => {
  const { album } = req.query;

  const response = await api.get("/?method=album.search", {
    params: {
      album: album,
      format: "json",
    },
  });

  res.status(200).send(response.data.results.albummatches.album);
});

module.exports = (app) => app.use("/last-fm", router);
