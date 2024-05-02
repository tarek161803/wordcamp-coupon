const Gift = require("../models/Gift");

const createOrUpdateGiftService = async (data) => {
  const giftData = await Gift.find({});

  if (giftData.length === 1) {
    const result = await Gift.updateOne({ _id: giftData[0]._id }, data);
    return result;
  } else {
    const result = await Gift.create(data);
    return result;
  }
};

const getGiftsStatusService = async () => {
  const giftData = await Gift.find({});
  return giftData[0] || { tshirt: 0, notepad: 0, sticker: 0 };
};

const updateGiftStatusService = async (id, data) => {
  const result = await Gift.updateOne({ _id: id }, data);
};

module.exports = { createOrUpdateGiftService, getGiftsStatusService, updateGiftStatusService };
