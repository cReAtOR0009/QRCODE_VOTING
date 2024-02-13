const mongoose = require("mongoose");

const voteSchema = mongoose.Schema(
  {
    name: String,
    phone: String,
    faculty: {
      type: String,
      enum: [
        "faculty1",
        "faculty2",
        "faculty3",
        "faculty4",
        "faculty5",
        "faculty6",
      ],
    },
    level: {
      type: Number,
      enum: [100, 200, 300, 400, 500],
    },
    bestFacultyPerformance: {
      type: String,
      enum: [
        "faculty1",
        "faculty2",
        "faculty3",
        "faculty4",
        "faculty5",
        "faculty6",
      ],
    },
    bestinduvidualPerformance: {
      type: String,
      enum: [
        "performance1",
        "performance2",
        "performance3",
        "performance4",
        "performance5",
        "performance6",
      ],
    },
  },
  {
    timestamps: true,
    toObject: {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret._v;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model('Vote', voteSchema);
