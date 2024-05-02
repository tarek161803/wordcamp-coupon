const express = require("express");
const couponRouter = require("./routes/coupon.route");
const participantRouter = require("./routes/participant.route");
const giftRouter = require("./routes/gift.route");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static("static"));
app.use(express.json());

app.use("api/participant", participantRouter);
app.use("api/coupon", couponRouter);
app.use("api/gift", giftRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "static/build/index.html"));
});

module.exports = app;
