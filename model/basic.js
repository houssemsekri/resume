const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  homeImage: {
    type: String,
  },
  homeParagraph: {
    type: String,
  },
  homeFacebook: {
    type: String,
  },
  homeGithub: {
    type: String,
  },
  aboutParagraph: {
    type: String,
  },
  aboutCv: {
    type: String,
  },
  aboutSkill1: {
    type: String,
  },
  aboutSkill2: {
    type: String,
  },
  aboutSkill3: {
    type: String,
  },
  contactPhone: {
    type: String,
  },
  contactAdress: {
    type: String,
  },
  contactEmail: {
    type: String,
  },
  skills: [],
  age: {
    type: String,
  },
  aboutImage: {
    type: String,
  },
});

module.exports = Data = mongoose.model("data", DataSchema, "data");
