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
    bestIndividualPerformance: {
      type: String,
      enum: [
        "contestant 1",
        "contestant 2",
        "contestant 3",
        "contestant 4",
        "contestant 5",
        "contestant 6",
        "contestant 7",
        "contestant 8",
        "contestant 9",
        "contestant 10",
        "contestant 11",
        "contestant 12",
        "contestant 13",
        "contestant 14",
        "contestant 15",
        "contestant 16",
        "contestant 17",
        "contestant 18",
        "contestant 19",
        "contestant 20",
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
