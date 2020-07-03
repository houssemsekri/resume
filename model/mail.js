const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MailSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = Mail = mongoose.model("mail", MailSchema);
