const mongoose = require("mongoose");
const validator = require("validator");

const participantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide Name"],
    },
    email: {
      type: String,
      required: [true, "Please Provide Email"],
      unique: true,
      validate: [validator.isEmail, "Please Provide Valid Email"],
    },
    phone: {
      type: String,
      required: [true, "Please Provide Phone Number"],
      unique: true,
    },
    interest: {
      type: Array,
    },
    gift: {
      type: String,
    },
  },
  { timestamps: true }
);

const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;
