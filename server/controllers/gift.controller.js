const { createOrUpdateGiftService, getGiftsStatusService } = require("../services/gift.services");

const createOrUpdateGift = async (req, res) => {
  try {
    const { password, ...giftData } = req.body;

    if (password !== "webappickwc@24") {
      return res.status(401).json({ status: "failed", message: "Unauthorized Access" });
    }

    const result = await createOrUpdateGiftService(giftData);
    res.status(201).json({ status: "success", message: "Gift Status Update/Added", result });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Gift Adding/Updating Failed", error: error.message });
  }
};

const getGiftsStatus = async (req, res) => {
  try {
    const result = await getGiftsStatusService();
    res.status(200).json({ status: "success", message: "Gift Status Update/Added", result });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Something Went Wrong", error: error.message });
  }
};
module.exports = { createOrUpdateGift, getGiftsStatus };
