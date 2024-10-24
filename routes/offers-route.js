const express = require("express");
const {offersList , addNewOffer, removeOffer, updateOffer} = require("../controllers/offersController");

const router = express.Router();

router.get("/offers_list",offersList);
router.post("/add_offers",addNewOffer);
router.delete("/remove_offer",removeOffer);
router.put("/update_offer:id",updateOffer);


module.exports = router;