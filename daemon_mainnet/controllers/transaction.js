const models = require("../models");

module.exports = {
  getTransactionInfo: async (req, res, next) => {
    try {
      const txInfo = await models.transaction.findAll();
      if (txInfo) res.status(200).json({ txInfo });
    } catch (err) {
      console.log(err);
      res.status(404).send({
        message: "server error",
        errMsg: err,
      });
    }
  },
};
