const express = require("express");

const {allReports} = require("../controllers/reportController");

const route = express.Router();

route.get("/all_reports", allReports);

module.exports = route;