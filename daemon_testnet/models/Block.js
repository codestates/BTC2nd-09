// "use strict";
const Sequelize = require("sequelize");

module.exports = class Block extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        chain_id: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        height: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        time: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        last_commit_hash: {
          type: Sequelize.STRING(300),
          allowNull: true,
        },
        data_hash: {
          type: Sequelize.STRING(300),
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Block",
        tableName: "Block",
        timestamps: false,
        paranoid: false,
        underscored: true,
        charset: "utf8",
      }
    );
  }
};
