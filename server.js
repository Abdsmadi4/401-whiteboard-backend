"use strict";

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

function start(port) {
  app.listen(port, () => {
    console.log(`app listen on port ${port}`);
  });
}

module.exports = {
  start,
};
