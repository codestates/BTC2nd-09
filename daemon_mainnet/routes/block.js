const router = require("express").Router();
const { getBlockInfo } = require("../controllers/block");

router.get("/", getBlockInfo);

module.exports = router;
