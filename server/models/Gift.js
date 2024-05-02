const mongoose = require("mongoose");

const giftSchema = new mongoose.Schema(
  {
    tshirt: {
      type: Number,
      required: [true, "Please Provide T-Shirt Quantity"],
    },
    notepad: {
      type: Number,
      required: [true, "Please Provide Notepad Quantity"],
    },
    sticker: {
      type: Number,
      required: [true, "Please Provide Sticker Quantity"],
    },
  },
  { timestamps: true }
);

const Gift = mongoose.model("Gift", giftSchema);
module.exports = Gift;
