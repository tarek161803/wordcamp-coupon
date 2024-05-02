const express = require("express");
const {
  createNewParticipant,
  cleanAllParticipant,
  getParticipantCount,
  getLastParticipant,
  validateInformation,
} = require("../controllers/participant.controller");
const router = express.Router();

router.route("/").get(getLastParticipant).post(createNewParticipant);
router.route("/clean").post(cleanAllParticipant);
router.route("/status").get(getParticipantCount);
router.route("/validate").post(validateInformation);

module.exports = router;
