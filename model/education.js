const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
  year: {
    type: String,
  },
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
});

module.exports = Education = mongoose.model("education", EducationSchema);
