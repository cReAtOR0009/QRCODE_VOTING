const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true
  },
  used: {
    type: Boolean,
    default: false
  },
  vote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vote',
    default:"" 
  }
});

module.exports = mongoose.model("VotingURL", urlSchema);
