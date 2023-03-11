require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
/*mongoose.connect('mongodb://localhost:27017/formapp')*/

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });


require('./model/Registration');
const app = require("./app");
const server = app.listen(3000, function () {
  console.log(`Express is runnin on port ${server.address().port}`);
});
