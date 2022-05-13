"use strict";
const Sequelize = require("sequelize");

const Block = require("./Block");
const Transaction = require("./Transaction");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.block = Block;
db.transaction = Transaction;

Block.init(sequelize);
Transaction.init(sequelize);

// Block.associate(db);
// Transaction.associate(db);

module.exports = db;
