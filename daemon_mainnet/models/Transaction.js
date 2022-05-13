"use strict";
const Sequelize = require("sequelize");

module.exports = class Transaction extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        address: Sequelize.STRING,
        tx_id: Sequelize.INTEGER,
        chain_id: Sequelize.STRING,
        tx_hash: Sequelize.STRING,
        blockNumber: Sequelize.STRING,
        gas_used: Sequelize.STRING,
        gas_wanted: Sequelize.STRING,
        time: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: "Transaction",
        tableName: "Transaction",
        timestamps: false,
        paranoid: false,
        underscored: true,
        charset: "utf8",
      }
    );
  }
};
