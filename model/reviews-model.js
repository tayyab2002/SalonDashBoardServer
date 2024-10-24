const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
    comment:{
        type: String,
        require: true
    }
})

const Reviews = new mongoose.model("reviews" , reviewsSchema);

module.exports = Reviews;