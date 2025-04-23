const Auth = require("../models/Auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/jwt");

const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    const existingUser = await Auth.findByEmail([email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = { name, email, password: hashedPassword, phone };
    const result = await Auth.create(userData);

    const newUser = {
      id: result.insertId,
      name,
      email,
      phone,
    };

    const token = generateToken(newUser);

    res
      .status(201)
      .json({ message: "Registration successful", user: newUser, token, });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const login = async (req, res) => {
  console.log("passed info:",req.body)
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const users = await Auth.findByEmail([email]);
    const user = users[0];

    if (!user) {
      return res.status(404).json({ message: "No user found." });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = generateToken(user);

    return res.status(200).json({
      message: "Login successful",
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = {
  register,
  login,
};
