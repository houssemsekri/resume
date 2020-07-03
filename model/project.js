const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  image: {
    type: String,
  },
  desc: {
    type: String,
    require: true,
  },
  teck: [],
  youtube: {
    type: String,
  },
  github: {
    type: String,
  },
  live: {
    type: String,
  },
  order: {
    type: String,
  },
});

module.exports = Project = mongoose.model("project", ProjectSchema);
