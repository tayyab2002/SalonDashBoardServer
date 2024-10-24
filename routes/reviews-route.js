const express = require("express");
const {allReviews, addReview, removeReview} = require("../controllers/reviewsController");
const router = express.Router();

router.post("/add_review", addReview);
router.get("/all_reviews", allReviews);
router.delete("/remove_review", removeReview);


module.exports = router;