import express from "express";
import requireAuth from "../middleware/requireAuth.js";
import User from "../models/User.js";


const router = express.Router();

router.get("/me", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ ok: true, data: user });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Failed to fetch user" });
  }
});

export default router;
