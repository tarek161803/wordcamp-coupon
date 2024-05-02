const Participant = require("../models/Participant");

const createParticipantService = async (data) => {
  const result = await Participant.create(data);
  return result;
};

const cleanParticipantTableService = async (data) => {
  const result = await Participant.deleteMany({});
  return result;
};

const getParticipantCountService = async () => {
  const result = await Participant.countDocuments({});
  return result;
};

const getLastParticipantService = async () => {
  const result = await Participant.find().sort({ $natural: -1 }).limit(10);
  return result;
};

const validateInformationService = async (data) => {
  const result = await Participant.find({ $or: [{ email: data.email }, { phone: data.phone }] });
  return result;
};

module.exports = {
  createParticipantService,
  cleanParticipantTableService,
  getParticipantCountService,
  getLastParticipantService,
  validateInformationService,
};
