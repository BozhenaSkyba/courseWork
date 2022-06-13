const mongoose = require("mongoose");

const contactSchmena = mongoose.Schema({
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
});

module.exports = mongoose.model("contact", contactSchmena);
