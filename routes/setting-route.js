const express = require("express");
const {
  basicSettingGet,
  basicSettingSet,
} = require("../controllers/settingControllers/basicSettingController");
const {
  contactSettingGet,
  contactSettingSet,
} = require("../controllers/settingControllers/contactSettingController");
const router = express.Router();

router.get("setting/basicsetting", basicSettingGet);
router.post("setting/basicsetting", basicSettingSet);
router.get("setting/contactsetting", contactSettingGet);
router.post("setting/basicsetting", contactSettingSet);

module.exports = router;
