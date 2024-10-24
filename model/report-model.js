const mongoose = require("mongoose");

const reportsScheme = new mongoose.Schema({
    name:{
        type: String,
        require: true
    }
})

const Report = new mongoose.model("Reports", reportsScheme);

module.exports = Report;