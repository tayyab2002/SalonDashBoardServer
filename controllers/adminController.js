const Admin = require("../model/admin-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// admin login and update controller

// admin new create controller
const adminCreate = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const hash_password = await bcrypt.hash(password, 10);

    const adminSet = await Admin.create({
      username,
      password: hash_password,
      email,
    });

    res.status(200).json({ msg: adminSet });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "internel server error" });
  }
};

// admin profile update contoller
const adminProfileUpdate = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ msg: "Admin not found" });
    }
    if (username || password || email) {
      admin.username = username;
      admin.email = email;
      admin.password = await bcrypt.hash(password, 10);
    }
    await admin.save();
    res.status(200).json({ msg: "Admin updated successfully", admin });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
};

// admin signIn contoller
const signIn = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await Admin.findOne({
      $or: [{ email }, { username }],
    });
    if (!user) {
      return res.status(401).json({ msg: "Invalid email and password!" });
    }
    
    const passwordchk = await bcrypt.compare(password, user.password);
    if (!passwordchk) {
      return res
        .status(401)
        .json({ msg: "Invalid password! please check your password." });
    }
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRETKEY,
      {
        algorithm: "HS512",
        expiresIn: "1h",
      }
    );
    res
      .status(200)
      .json({ msg: "SingIn Successfully.", token, data: user });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
};
module.exports = { adminProfileUpdate, signIn, adminCreate };
