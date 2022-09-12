'use strict';

require('dotenv').config();
const { db } = require("./models/index");

const server = require("./server");

const port = process.env.PORT || 3001;

db.sync()
  .then(() => {
    server.start(port);
  })
  .catch(console.error);