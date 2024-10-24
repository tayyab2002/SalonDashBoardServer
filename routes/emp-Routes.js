const express = require('express');
const {empDetails , empRegister, removeEmployee, updateEmployee} = require('../controllers/employeeController')
const router = express.Router();

router.get('/all_employees',empDetails);
router.post('/register',empRegister);
router.delete('/remove',removeEmployee);
router.put('/update_data/employee_no:id',updateEmployee)

module.exports = router;