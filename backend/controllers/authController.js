const User = require("../models/User");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { registerUser } = require("../controllers/authController");

// test route
exports.testController = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Auth route working"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Test route error"
    });
  }
};

exports.forgotPassword = async (req, res) => {
  try {

    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {                                       
      return res.status(404).json({ message: "User not found" });
    }
    const token = Math.random().toString(36).substring(2);

    user.resetToken = token;
    await user.save();
  
    console.log("Reset Token:", token);
    console.log(
      `Reset Link: http://localhost:5173/reset-password/${token}`
    );    

    res.json({ message: "Reset link sent" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });

  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({ resetToken: token });

    if (!user) {
      return res.status(404).json({ message: "Invalid token" });
    }

    user.password = req.body.password;
    user.resetToken = undefined;

    await user.save();

    res.json({
      success: true,
      message: "Password reset successful"
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create user
    const user = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};