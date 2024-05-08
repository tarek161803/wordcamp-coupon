const Coupon = require("../models/Coupon");

const seedCoupon = async (data) => {
  const result = await Coupon.insertMany(data);
  return result;
};

const getCouponStatusService = async () => {
  const result = await Coupon.aggregate([
    {
      $group: {
        _id: null,
        total: { $sum: 1 },
        participant: {
          $addToSet: {
            $cond: [{ $eq: ["$participant", false] }, null, "$participant"],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        total: 1,
        participant: {
          $size: {
            $filter: {
              input: "$participant",
              cond: { $ne: ["$$this", null] },
            },
          },
        },
      },
    },
  ]);

  return result[0];
};

const getMaxCoupon = async () => {
  const result = await Coupon.find().sort({ coupon: -1 }).limit(1);
  return result;
};

const getAllParticipantCoupons = async () => {
  const result = Coupon.find({ participant: { $ne: false } });
  return result;
};

const getUnusedCouponService = async () => {
  let result;
  const session = await Coupon.startSession();
  session.startTransaction();
  try {
    result = await Coupon.findOneAndUpdate({ participant: false }, { participant: true }, { new: true, session });
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
  return result;
};

const updateCouponService = async (id, participant) => {
  const result = await Coupon.updateOne({ _id: id }, participant);
  return result;
};

const cleanCouponTableService = async () => {
  const result = await Coupon.deleteMany({});
  return result;
};

const searchCouponService = async (coupon) => {
  const result = await Coupon.findOne({ coupon }).populate("participant");
  return result;
};

module.exports = {
  seedCoupon,
  getMaxCoupon,
  getAllParticipantCoupons,
  getUnusedCouponService,
  updateCouponService,
  cleanCouponTableService,
  getCouponStatusService,
  searchCouponService,
};
