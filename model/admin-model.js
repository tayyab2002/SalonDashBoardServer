const mongoose = require("mongoose");

const adminSchema =  new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin :{
        type: Boolean,
        default: false,
    }
});


const Admin = new mongoose.model("Admin",adminSchema);

module.exports = Admin;