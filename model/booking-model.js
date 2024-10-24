const mongoose = require ("mongoose");

const bookingSchema = new mongoose.Schema({
    barber:{
        type: String,
        require: true
    },
    services:{
        type: String,
        require: true
    },
    time:{
        type: Date,
        default: Date.now
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    customername: {
        type: String,
        required: true
    },
    customeremail: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status:{
        type: String,
    },
    amount:{
        type: String,
        require: true
    }
}) ;


const Booking = new mongoose.model("Booking",bookingSchema);
module.exports = Booking;