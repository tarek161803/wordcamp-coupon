const {
  seedCoupon,
  getMaxCoupon,
  getAllParticipantCoupons,
  cleanCouponTableService,
  getCouponStatusService,
  searchCouponService,
} = require("../services/coupon.services");
const { generatePdf } = require("../utils/generatePdf");

const seedMultipleCoupon = async (req, res) => {
  try {
    if (req.body.password !== "webappickwc@24") {
      return res.status(401).json({ status: "failed", message: "Unauthorized Access" });
    }
    const count = +req.body.count;
    if (!count) {
      return res.status(400).json({ status: "failed", message: "coupon insertion failed" });
    }
    const coupons = [];
    const maxCoupon = await getMaxCoupon();

    let couponStart = 3544;

    if (maxCoupon.length !== 0) {
      couponStart = maxCoupon[0].coupon;
    }

    for (let i = 1; i <= count; i++) {
      const couponValue = couponStart + i;
      coupons.push({ coupon: couponValue, participant: "6638a2187abb0760cf51d704" });
    }

    const result = await seedCoupon(coupons);

    res.status(201).json({ status: "success", message: "Coupon Added" });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "coupon insertion failed", error: error.message });
  }
};

const getCouponStatus = async (req, res) => {
  try {
    const result = await getCouponStatusService();
    res.status(200).json({ status: "success", message: "Coupon Status", result });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Something Went Wrong", error: error.message });
  }
};

const cleanAllCoupon = async (req, res) => {
  try {
    if (req.body.password !== "webappickwc@24") {
      return res.status(401).json({ status: "failed", message: "Unauthorized Access" });
    }
    const result = await cleanCouponTableService();
    res.status(202).json({ status: "success", message: "All Coupon Deleted", result });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Something Went Wrong!", error: error.message });
  }
};

const searchCoupon = async (req, res) => {
  try {
    const couponCode = req.body.coupon;
    const result = await searchCouponService(couponCode);
    res.status(200).json({ status: "success", message: "Coupon Search Result", result });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Something Went Wrong", error: error.message });
  }
};

const generateCouponPDF = async (req, res) => {
  try {
    const coupons = await getAllParticipantCoupons();
    generatePdf(coupons);

    res.status(200).json({ status: "success", message: "PDF Generated" });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Something Went Wrong!", error: error.message });
  }
};

module.exports = { seedMultipleCoupon, generateCouponPDF, cleanAllCoupon, getCouponStatus, searchCoupon };
