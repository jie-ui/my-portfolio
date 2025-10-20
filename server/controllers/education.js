// controllers/qualifications.controller.js
import mongoose from "mongoose";
import Education from "../models/Education.js";

// GET /api/qualifications -> get all qualifications
export const getAllQualifications = async (_req, res, next) => {
  try {
    const docs = await Education.find({}).lean();
    return res.json({ ok: true, data: docs });
  } catch (err) { return next(err); }
};

// GET /api/qualifications/:id -> get qualification by id
export const getQualificationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ ok: false, error: "Invalid id" });
    }

    const doc = await Education.findById(id).lean();
    if (!doc) {
      return res.status(404).json({ ok: false, error: "Not found" });
    }
    return res.json({ ok: true, data: doc });
  } catch (err) { return next(err); }
};

// POST /api/qualifications -> add new qualification
export const addNewQualification = async (req, res, next) => {
  try {
    const doc = await Education.create(req.body);
    return res.status(201).json({ ok: true, data: doc });
  } catch (err) { return next(err); }
};

// PUT /api/qualifications/:id -> update qualification by id
export const updateQualificationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ ok: false, error: "Invalid id" });
    }

    const doc = await Education.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      context: "query",
    });

    if (!doc) {
      return res.status(404).json({ ok: false, error: "Not found" });
    }
    return res.json({ ok: true, data: doc });
  } catch (err) { return next(err); }
};

// DELETE /api/qualifications/:id -> remove qualification by id
export const deleteQualificationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ ok: false, error: "Invalid id" });
    }

    const doc = await Education.findByIdAndDelete(id);
    if (!doc) {
      return res.status(404).json({ ok: false, error: "Not found" });
    }
    return res.json({ ok: true, data: doc });
  } catch (err) { return next(err); }
};

// DELETE /api/qualifications -> remove all qualifications
export const deleteAllQualifications = async (_req, res, next) => {
  try {
    const r = await Education.deleteMany({});
    return res.json({ ok: true, deletedCount: r.deletedCount });
  } catch (err) { return next(err); }
};
