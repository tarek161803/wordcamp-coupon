const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const couponSchema = new mongoose.Schema(
  {
    coupon: {
      type: Number,
      required: [true, "please provide coupon"],
      unique: true,
    },
    participant: {
      type: ObjectId,
      default: null,
      ref: "Participant",
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", couponSchema);
module.exports = Coupon;
