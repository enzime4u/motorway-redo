"use strict";
const app = require("express")();
const images = require("./src/images.json");

const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

app.get("/images", ({ query }, res) => {
  const i = query.limit ? images.slice(0, parseInt(query.limit)) : images;
  return res.status(200).json(i);
});

app.listen(5500, () => {
  process.stdout.write("Server is available on http://localhost:5500/\n");
});
