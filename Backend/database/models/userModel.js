const mongoose = require('mongoose');

//------------ User Schema ------------//
const adminSchema = mongoose.Schema({
  username: String,
  password: String,
}, {
  timestamp: true,
  toObject: {
      transform: (doc, ret, options) => {
          ret.id = ret._id;
          delete ret._id;
          delete ret.__v;
          delete ret.password
          return ret;

      }
  }
});

const Admin= mongoose.model('user', adminSchema);
module.exports = Admin