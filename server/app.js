const express = require("express");
const couponRouter = require("./routes/coupon.route");
const participantRouter = require("./routes/participant.route");
const giftRouter = require("./routes/gift.route");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("static"));
app.use(express.json());

app.use("/participant", participantRouter);
app.use("/coupon", couponRouter);
app.use("/gift", giftRouter);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
