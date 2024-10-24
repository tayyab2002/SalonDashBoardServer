const EmpRegister = require("../model/employee-model");

// add new employee from admin panel
const empRegister = async (req, res) => {
  try {
    const {
      empname,
      address,
      email,
      password,
      description,
      experince,
      service,
      subservices,
      img,
      status,
    } = req.body;
    const userExist = await EmpRegister.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .json({ msg: "email already exist. Try another plz!" });
    }

    const empcreated = await EmpRegister.create({
      empname,
      address,
      email,
      password,
      description,
      experince,
      service,
      subservices,
      img,
      status,
    });
    res.status(200).json({ msg: "Successfully Done", empcreated });
  } catch (error) {
    return res.status(500).send({ msg: "internel server error" });
  }
};

// for user details
const empDetails = async (req, res) => {
  try {
    const employees = await EmpRegister.find({});
    if (!employees) {
      res.status(404).json({ msg: "No employee details found!" });
    }
    res.status(200).json(employees);
  } catch (error) {
    return res.status(500).send({ msg: "connot get/" });
  }
};

// employee delete
const removeEmployee = async (req, res) => {
  try {
    const { id } = req.body;

    const result = await EmpRegister.findByIdAndDelete(id);

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    if (result) {
      return res.status(200).json({ message: "Employee deleted successfully" });
    } else {
      return res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const {
    empname,
    address,
    email,
    password,
    description,
    experince,
    service,
    subservices,
    img,
    status,
  } = req.body;
  try {
    const updatedCategory = await EmpRegister.findByIdAndUpdate(
      id,
      {
        empname,
        address,
        email,
        password,
        description,
        experince,
        service,
        subservices,
        img,
        status,
      },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = { empRegister, empDetails, removeEmployee, updateEmployee };
