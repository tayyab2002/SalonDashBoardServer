    const mongoose = require("mongoose");

    const subCategorieSchema = new mongoose.Schema({
        category: {
            type: String,
            required: true
        },
        title:{
            type: String,
            require: true
        },
        description: {
            type: String,
        },
        servicefor:{
            type: String,   
        },
        duration: {
            type: Number,
            required: true
        },
        preparationtime:{
            type: Number,
        },
        price:{
            type: String,
            require: true
        }
    })

    const SubCategories = new mongoose.model("SubCategorie" , subCategorieSchema);

    module.exports = SubCategories;