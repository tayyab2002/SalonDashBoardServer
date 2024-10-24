const express = require("express");
const { adminProfileUpdate ,signIn , adminCreate} = require("../controllers/adminController");
const router = express.Router();

router.post("/admin-create", adminCreate);
router.post("/admin-signIn", signIn);
router.put("/admin-update", adminProfileUpdate);

module.exports = router;
