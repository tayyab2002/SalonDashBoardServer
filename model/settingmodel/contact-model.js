const mongoose = require("mongoose");

const adminContactSchema = new mongoose.Schema({
    phoneno:{
        type: String,
    },
    email:{
        type: String,
    },
    address:{
        type: String,
    }
});

const AdminContact = new mongoose.model("AdminContact",adminContactSchema);

module.exports = AdminContact;