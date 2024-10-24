const mongoose =  require("mongoose");

const adminSettingSchema =  new mongoose.Schema({
    currency:{
        type: String,
        require: true
    },
    timeslotlenght:{
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    }
});

const AdminSetting = new mongoose.model("Setting",adminSettingSchema);

module.exports = AdminSetting;