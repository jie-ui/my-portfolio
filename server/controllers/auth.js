import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
  //1. find user
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ ok: false, error: "User not found" });

    // 2. valid password
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ ok: false, error: "Incorrect password" });

    // 3. Jwt
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );
    console.log('Generated token:', token);
    // 4. return token
    res.json({ ok: true, token, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Login failed" });
  }
};
// singout
export const signOut = (req, res) => {
  
  res.json({ ok: true, message: "Signed out successfully" });
};
