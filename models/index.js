"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const post = require("./post.model");

const POSTGRES_URL = process.env.DATABASE_URL || "postgres://smadi_:060997@localhost:5432/post";



// const sequelizeOption = {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// };

// let sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);
let sequelize = new Sequelize(POSTGRES_URL);


module.exports = {
  db: sequelize,
  Post: post(sequelize, DataTypes),
};
