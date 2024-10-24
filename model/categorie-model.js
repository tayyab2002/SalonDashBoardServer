const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    img:{
        type: String,
        require: true
    },
    status:{
        type: Boolean,
        default: true
    }
})

const Categories = new mongoose.model("Categories" , categoriesSchema);

module.exports = Categories;