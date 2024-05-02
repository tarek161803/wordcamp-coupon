const express = require("express");

const { createOrUpdateGift, getGiftsStatus } = require("../controllers/gift.controller");
const router = express.Router();

router.route("/create").post(createOrUpdateGift);
router.route("/status").get(getGiftsStatus);

module.exports = router;
