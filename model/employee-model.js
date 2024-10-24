const mongoose = require("mongoose");

const EmpSchema =  new mongoose.Schema({
    empname:{
        type: String,
        required: true,
    },
    address:{
        type: String,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        require:true
    },
    description:{
        type: String,
    },
    experince:{
        type: String,
        required: true,
    },
    service:{
        type: String,
        require: true
    },
    subservices: {
        type: Array
    },
    img:{
        type: String,
    },
    status:{
        type: Boolean,
        default: true,
    }
});


const EmpRegister = new mongoose.model("EmpRegister",EmpSchema);

module.exports = EmpRegister;