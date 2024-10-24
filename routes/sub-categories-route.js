const express = require("express");
const router = express.Router();
const {addSubCategories, SubCategoriesList, removeSubCategory} = require("../controllers/subCategoriesController");

router.get("/subcategories/list",SubCategoriesList);
router.post("/subcategories/addnew",addSubCategories);
router.delete("/subcategories/find/delete",removeSubCategory);

module.exports = router;