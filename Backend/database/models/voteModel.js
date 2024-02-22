const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    faculty: {
      type: String,
      enum: [
        "Faculty of Agriculture",
        "Faculty of Art",
        "Faculty of Education",
        "Faculty of Environmental Design and Management",
        "Faculty of Law",
        "Faculty of Science",
        "Faculty of The Social Sciences",
        "Faculty of Administration and Management Sciences",
      ],
      required: true,
    },
    level: {
      type: Number,
      enum: [100, 200, 300, 400, 500],
      required: true,
    },
    bestFacultyPerformance: {
      type: String,
      enum: [
        "Faculty of Agriculture",
        "Faculty of Art",
        "Faculty of Education",
        "Faculty of Environmental Design and Management",
        "Faculty of Law",
        "Faculty of Science",
        "Faculty of The Social Sciences",
        "Faculty of Administration and Management Sciences",
      ],
      required: true,
    },
    url: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VotingURL", // Reference to the URL schema
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("Vote", voteSchema);
