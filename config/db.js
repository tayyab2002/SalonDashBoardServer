const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB Connect successfully.");
  } catch (error) {
    console.error("DB Connection Faild");
    process.exit(1);
  }
};

module.exports = connectDB;
