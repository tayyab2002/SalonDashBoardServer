const SubCategorie = require("../model/subcategorie-model");

const addSubCategories = async (req, res) => {
  
  try {
    const {
      category,
      title,
      description,
      servicefor,
      duration,
      preparationtime,
      price,
    } = req.body;
    const alreadyCheck = await SubCategorie.findOne({ title });
    if (alreadyCheck) {
     return res.status(400).json({ msg: "This Is already exist." });
    }
    const AddSubcategorie = await SubCategorie.create({
      category,
      title,
      description,
      servicefor,
      duration,
      preparationtime,
      price,
    });
    res
      .status(200)
      .json({ msg: "Added Successfully.", data: AddSubcategorie });
  } catch (error) {
    return res.status(500).send({ msg: "internel server error detect" });
  }
};

const SubCategoriesList = async (req, res) => {
  try {
    const SCListData = await SubCategorie.find({});
    if (!SCListData) {
      res.status(400).json({ msg: "SubCategoriesList is Empty." });
    }
    res.status(200).json({ msg: "SubCategoriesList Data", data: SCListData });
  } catch (error) {
    return res.status(500).send({ msg: "internel server error" });
  }
};

const removeSubCategory = async (req, res) => {
  try {
    const { id } = req.body;

    const result = await SubCategorie.findByIdAndDelete(id);

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }
    
    if (result) {
      return res.status(200).json({ message: "SubCategory deleted successfully" });
    } else {
      return res.status(404).json({ message: "SubCategory not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}
module.exports = { addSubCategories, SubCategoriesList, removeSubCategory };
