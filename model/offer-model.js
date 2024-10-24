const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  maximumperuser: {
    type: Number,
    require: true,
  },
  howexpire:{
    type: String,
    require: true
  },
  expirydate: {
    type: Date,
    default: () => {
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    },
  },
  discounttype: {
    type: String,
    require: true,
  },
  discount:{
    type: String,
    require: true
  },
  img: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    require: true,
  },
});

const Offer = new mongoose.model("Offer", offerSchema);

module.exports = Offer;
