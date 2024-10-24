const Offers = require("../model/offer-model");
const offersList = async (req, res) => {
  try {
    const offers = await Offers.find({});
    if (!offers) {
      return res.status(400).json({ msg: "No one Offer is Available." });
    }
    res.status(200).json({ msg: "Available Offers", offers });
  } catch (error) {
    return res.status(500).send({ msg: "internel server error" });
  }
};

const addNewOffer = async (req, res) => {
  try {
    const {
      title,
      maximumperuser,
      howexpire,
      expirydate,
      discounttype,
      discount,
      img,
      status,
    } = req.body;
    const exitsOfferCheck = await Offers.findOne({ title });

    if (exitsOfferCheck) {
      return res.status(400).json({ msg: "This title offer already exits." });
    }
    const offerAdded = await Offers.create({
      title,
      maximumperuser,
      howexpire,
      expirydate,
      discounttype,
      discount,
      img,
      status,
    });
    res.status(200).json({ msg: offerAdded });
  } catch (error) {
    return res.status(500).send({ msg: "internel server error" });
  }
};

const removeOffer = async (req, res) => {
  try {
    const { id } = req.body;

    const result = await Offers.findByIdAndDelete(id);

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    if (result) {
      return res.status(200).json({ message: "Offer deleted successfully" });
    } else {
      return res.status(404).json({ message: "Offer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const updateOffer = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    maximumperuser,
    howexpire,
    expirydate,
    discounttype,
    discount,
    img,
    status,
  } = req.body;
  try {
    const updatedOffer = await Offers.findByIdAndUpdate(
      id,
      {
        title,
        maximumperuser,
        howexpire,
        expirydate,
        discounttype,
        discount,
        img,
        status,
      },
      { new: true }
    );
    if (!updatedOffer) {
      return res.status(404).json({message:"Offer not found"});
    }
    res.status(200).json(updatedOffer);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = { offersList, addNewOffer, removeOffer, updateOffer };
