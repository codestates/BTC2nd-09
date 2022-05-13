const models = require("../models");

module.exports = {
  getBlockInfo: async (req, res, next) => {
    try {
      const blockInfo = await models.block.findAll();
      if (blockInfo) res.status(200).json({ blockInfo });
    } catch (err) {
      console.log(err);
      res.status(404).send({
        message: "server error",
        errMsg: err,
      });
    }
  },
};
