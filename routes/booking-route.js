const {allBookings, newBooking, approveBookings, updateBookingStatus} = require("../controllers/bookingController");

const expres = require("express");

const router = expres.Router();

router.get("/all/bookinglist", allBookings);
router.post("/new/booking", newBooking);
router.post("/approve/booking", approveBookings);
router.patch('/bookings/:id/status', updateBookingStatus)

module.exports = router;