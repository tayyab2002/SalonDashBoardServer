const Booking = require("../model/booking-model");

// show all bookings
const allBookings = async (req, res) => {
  try {
    const bookingList = await Booking.find({});

    if (!bookingList) {
      return res.status(400).json({ msg: "Booking List is Empty." });
    }

    res.status(200).json({ msg: "Booking List", data: bookingList });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// when any new oder get
const newBooking = async (req, res) => {
  try {
    const {
      barber,
      services,
      date,
      time,
      startTime,
      endTime,
      customername,
      customeremail,
      phonenumber,
      address,
      status,
      amount
    } = req.body;
    const newOder = await Booking.create({
      barber,
      services,
      date,
      time,
      startTime,
      endTime,
      customername,
      customeremail,
      phonenumber,
      address,
      status,
      amount
    });
    res.status(200).json({ msg: "Oder Successfully Done.", order: newOder });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// when admin accept the order
const approveBookings = async (req, res) => {
  try {
    const approvedBooking = await Booking.find({});

    if (!approvedBooking) {
      res.status(400).json({ meg: "Accepted Booking list is empty." });
    }
    res.status(200).json({ msg: "Accepted Orders", Oders: approveBookings });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; 

    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true } 
    );

    if (!updatedBooking) {
      return res.status(404).json({ msg: "Booking not found." });
    }

    res.status(200).json({ msg: "Booking status updated.", booking: updatedBooking });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { allBookings, newBooking, approveBookings, updateBookingStatus };
