import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/User.js";

// GET /api/users
export const getAllUsers = async (_req, res, next) => {
  try {
    const docs = await User.find({}).select("-password").lean();
    res.json({ ok: true, data: docs });
  } catch (err) { next(err); }
};

// GET /api/users/:id
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id))
      return res.status(400).json({ ok: false, error: "Invalid id" });

    const doc = await User.findById(id).select("-password").lean();
    if (!doc) return res.status(404).json({ ok: false, error: "Not found" });
    res.json({ ok: true, data: doc });
  } catch (err) { next(err); }
};

// POST /api/users 
export const addNewUser = async (req, res, next) => {
  try {
    const { password, ...rest } = req.body;

  
    const hashedPassword = await bcrypt.hash(password, 10);

    const doc = await User.create({ ...rest, password: hashedPassword });

   
    const { password: _, ...userWithoutPassword } = doc.toObject();

    res.status(201).json({ ok: true, data: userWithoutPassword });
  } catch (err) { next(err); }
};

// PUT /api/users/:id 
export const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id))
      return res.status(400).json({ ok: false, error: "Invalid id" });

    let updateData = { ...req.body };

   
    if (req.body.password) {
      updateData.password = await bcrypt.hash(req.body.password, 10);
    }

    const doc = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
      context: "query",
      select: "-password",
    }).lean();

    if (!doc) return res.status(404).json({ ok: false, error: "Not found" });
    res.json({ ok: true, data: doc });
  } catch (err) { next(err); }
};

// DELETE /api/users/:id
export const deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id))
      return res.status(400).json({ ok: false, error: "Invalid id" });

    const doc = await User.findByIdAndDelete(id);
    if (!doc) return res.status(404).json({ ok: false, error: "Not found" });
    res.json({ ok: true, data: doc });
  } catch (err) { next(err); }
};

// DELETE /api/users
export const deleteAllUsers = async (_req, res, next) => {
  try {
    const r = await User.deleteMany({});
    res.json({ ok: true, deletedCount: r.deletedCount });
  } catch (err) { next(err); }
};
