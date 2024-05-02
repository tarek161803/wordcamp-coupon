const mongoose = require("mongoose");

const app = require("./app");
const Participant = require("./models/Participant");
const Coupon = require("./models/Coupon");

mongoose
  .connect(
    "mongodb+srv://tarekwebappick:lsD1Kq442rQ8nRMq@cluster0.or4ekh6.mongodb.net/wordcamp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connection successful");
  })
  .catch(() => {
    console.log("error connecting to database");
  });

const port = 3000;

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
