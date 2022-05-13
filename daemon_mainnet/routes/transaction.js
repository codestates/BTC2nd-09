const router = require("express").Router();
const { getTransactionInfo } = require("../controllers/transaction");

router.get("/", getTransactionInfo);

module.exports = router;
