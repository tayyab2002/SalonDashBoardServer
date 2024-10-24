const Reviews = require("../model/reviews-model");
const allReviews = async (req, res) => {
  try {
    const reviews = await Reviews.find({});
    if (!reviews) {
     return res.status(400).json({ msg: "No Reviwes Available." });
    }
    res.status(200).json({ msg: "Reviews", data: reviews });
  } catch (error) {
    res.status(400).json({msg: error.message});
  }
};

const addReview = async (req, res) => {
  try {
    const { name, email, rating, comment } = req.body;

    const newReview = await Reviews({
      name,
      email,
      rating,
      comment,
    });
    const savedReview = await newReview.save();
    res
      .status(200)
      .json({ msg: "Review Added Successfully.", reviews: savedReview });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const removeReview = async (req, res) => {
  try {
    const { id } = req.body;

    const result = await Reviews.findByIdAndDelete(id);

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }
    
    if (result) {
      return res.status(200).json({ message: "Review deleted successfully" });
    } else {
      return res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}
module.exports = { allReviews, addReview ,removeReview};
