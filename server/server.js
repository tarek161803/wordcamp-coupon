const mongoose = require("mongoose");

const app = require("./app");

mongoose
  .connect(
    "mongodb+srv://tarekwebappick:lsD1Kq442rQ8nRMq@cluster0.or4ekh6.mongodb.net/wordcamp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connection successful");
  })
  .catch((error) => {
    console.log(error);
    console.log("error connecting to database");
  });

const port = 3001;

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
