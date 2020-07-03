const mongoose = require("mongoose");
const env = require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("mongoose connected");
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

module.exports = connect;
