const express = require("express");
const { addNewCategorie , categoriesList, removeCategory, updateCategory} = require("../controllers/categoriesController");

const router = express.Router();

router.get("/allcategory",categoriesList);
router.post("/addcategory",addNewCategorie);
router.delete("/remove_C",removeCategory);
router.put('/update/category:id', updateCategory);


module.exports = router; 