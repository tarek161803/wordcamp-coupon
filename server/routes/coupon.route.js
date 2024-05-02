const express = require("express");
const {
  seedMultipleCoupon,
  generateCouponPDF,
  cleanAllCoupon,
  getCouponStatus,
  searchCoupon,
} = require("../controllers/coupon.controller");
const router = express.Router();

router.route("/").post(searchCoupon);
router.route("/status").get(getCouponStatus);
router.route("/seed").post(seedMultipleCoupon);
router.route("/clean").post(cleanAllCoupon);
router.route("/pdf-generate").get(generateCouponPDF);

module.exports = router;
