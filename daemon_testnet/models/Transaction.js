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
        tx_hash: Sequelize.STRING,
        chain_id: Sequelize.STRING,
        blockNumber: Sequelize.INTEGER,
        transaction_fee: Sequelize.INTEGER,
        gas_used: Sequelize.INTEGER,
        gas_request: Sequelize.INTEGER,
        from: Sequelize.STRING,
        to: Sequelize.STRING,
        value: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: "Transaction",
        tableName: "Transaction",
        timestamps: true,
        paranoid: false, // 삭제일 (복구용)
        underscored: true,
        charset: "utf8",
        onDelete: "cascade",
      }
    );
  }
};
