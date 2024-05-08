const {
  createParticipantService,
  cleanParticipantTableService,
  getParticipantCountService,
  getLastParticipantService,
  validateInformationService,
  searchParticipantByEmailService,
} = require("../services/participant.services");
const { getUnusedCouponService, updateCouponService } = require("../services/coupon.services");
const { sendMail } = require("../utils/mail");
const { getGiftsStatusService, updateGiftStatusService } = require("../services/gift.services");

const createNewParticipant = async (req, res) => {
  try {
    const participantInfo = req.body;

    const unusedCoupon = await getUnusedCouponService();
    if (!unusedCoupon) {
      throw new Error("No Coupon Available");
    }
    const giftStatus = await getGiftsStatusService();
    const availableGift = [];
    if (giftStatus.tshirt > 0) {
      availableGift.push("tshirt");
    }
    if (giftStatus.notepad > 0) {
      availableGift.push("notepad");
    }
    if (giftStatus.sticker > 0) {
      availableGift.push("sticker");
    }

    if (availableGift.length === 0) {
      const resetStatus = await updateCouponService(unusedCoupon._id, { participant: false });
      throw new Error("No Gift Available");
    }

    const randomIndex = Math.floor(Math.random() * availableGift.length);
    const participantGift = availableGift[randomIndex];

    const participant = await createParticipantService({
      ...participantInfo,
      gift: participantGift,
      coupon: unusedCoupon.coupon,
    });
    const setParticipantIdOnCouponTable = await updateCouponService(unusedCoupon._id, { participant: participant._id });
    const updateGiftStatus = await updateGiftStatusService(giftStatus._id, {
      [participantGift]: giftStatus[participantGift] - 1,
    });
    sendMail({ email: req.body.email, name: req.body.name, coupon: unusedCoupon.coupon, swag: participantGift });
    res.status(201).json({ status: "success", message: "Registration Successful", data: participant });
  } catch (error) {
    res
      .status(400)
      .json({ status: "failed", message: "Registration Failed", error: { code: error.code, message: error.message } });
  }
};

const cleanAllParticipant = async (req, res) => {
  try {
    if (req.body.password !== "webappickwc@24") {
      return res.status(401).json({ status: "failed", message: "Unauthorized Access" });
    }
    const result = await cleanParticipantTableService();
    res.status(202).json({ status: "success", message: "All Participant Data Deleted", result });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Something Went Wrong!", error: error.message });
  }
};

const getParticipantCount = async (req, res) => {
  try {
    const count = await getParticipantCountService();
    res.status(200).json({ status: "success", message: "Participant Count", count });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Something Went Wrong!", error: error.message });
  }
};

const getLastParticipant = async (req, res) => {
  try {
    const result = await getLastParticipantService();
    res.status(200).json({ status: "success", message: "Last Participant", result });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Something Went Wrong!", error: error.message });
  }
};

const validateInformation = async (req, res) => {
  try {
    const data = req.body;
    const result = await validateInformationService(data);
    res.status(200).json({ status: "success", message: "Validate Information", result });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Something Went Wrong!", error: error.message });
  }
};

const searchParticipant = async (req, res) => {
  try {
    const email = req.body.email;
    const result = await searchParticipantByEmailService(email);
    res.status(200).json({ status: "success", message: "Participant Search Result", result });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Something Went Wrong", error: error.message });
  }
};

module.exports = {
  createNewParticipant,
  cleanAllParticipant,
  getParticipantCount,
  getLastParticipant,
  validateInformation,
  searchParticipant,
};
