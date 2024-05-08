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
      type: mongoose.Schema.Types.Mixed,
      default: false,
      ref: "Participant",
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", couponSchema);
module.exports = Coupon;
