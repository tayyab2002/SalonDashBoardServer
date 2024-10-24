const Categories = require("../model/categorie-model");

const categoriesList = async (req, res) => {
  try {
    const Category = await Categories.find({});
    if (!Category) {
      return res.status(400).json({ msg: "Category list Empty" });
    }
    res.status(200).json({ msg: "Successfull", data: Category });
  } catch (error) {
    return res.status(500).send({ msg: "internel server error" });
  }
};

const addNewCategorie = async (req, res) => {
  try {
    const { title, img, status } = req.body;
    const check = await Categories.findOne({ title });
    if (check) {
      return res.status(400).json({ msg: "This Category Already Available" });
    }
    const newCategory = await Categories.create({
      title,
      img,
      status,
    });
    res
      .status(200)
      .json({ msg: "New Category Add Successfully.", data: newCategory });
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

// remove category
const removeCategory = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }
    const result = await Categories.findByIdAndDelete(id);

    if (result) {
      return res.status(200).json({ message: "Category deleted successfully" });
    } else {
      return res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// update category
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { title, img } = req.body;
  try {
    const updatedCategory = await Categories.findByIdAndUpdate(
      id,
      { title, img },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
  addNewCategorie,
  categoriesList,
  removeCategory,
  updateCategory,
};
