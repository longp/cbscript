const router = require("express").Router();
const Controllers = require("../controllers")
router.get("/buy/btc", Controllers.BTC.buyBTC)
// router.post("/etc/buy", Controllers.ETC.buyETC)

module.exports = router;
