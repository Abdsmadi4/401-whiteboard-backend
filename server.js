"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const postRouter = require("./routes/post.route");

app.use(cors());
app.use(express.json());
app.use(postRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home page",
    code: 200,
  });
});

app.use(notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`Up and running on port ${port}`));
}

module.exports = {
  start,
  app,
};
