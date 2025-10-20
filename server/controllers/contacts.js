import mongoose from "mongoose";
import Contact from "../models/Contact.js";

// GET /api/contacts  -> get all contacts
export const getAllContacts = async (req, res, next) => {
  try {
    const docs = await Contact.find({}).lean();
    res.json({ ok: true, data: docs });
  } catch (err) { next(err); }
};

// GET /api/contacts/:id -> get contact by id
export const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id))
      return res.status(400).json({ ok: false, error: "Invalid id" });

    const doc = await Contact.findById(id).lean();
    if (!doc) return res.status(404).json({ ok: false, error: "Not found" });
    res.json({ ok: true, data: doc });
  } catch (err) { next(err); }
};

// POST /api/contacts -> add new contact
export const addNewContact = async (req, res, next) => {
  try {
    const doc = await Contact.create(req.body);
    res.status(201).json({ ok: true, data: doc });
  } catch (err) { next(err); }
};

// PUT /api/contacts/:id -> update contact by id
export const updateOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id))
      return res.status(400).json({ ok: false, error: "Invalid id" });

    const doc = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      context: "query",
    });
    if (!doc) return res.status(404).json({ ok: false, error: "Not found" });
    res.json({ ok: true, data: doc });
  } catch (err) { next(err); }
};

// DELETE /api/contacts/:id -> remove contact by id
export const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id))
      return res.status(400).json({ ok: false, error: "Invalid id" });

    const doc = await Contact.findByIdAndDelete(id);
    if (!doc) return res.status(404).json({ ok: false, error: "Not found" });
    res.json({ ok: true, data: doc });
    
  } catch (err) { next(err); }
};

// DELETE /api/contacts -> remove all contacts
export const deleteAllContacts = async (_req, res, next) => {
  try {
    const r = await Contact.deleteMany({});
    res.json({ ok: true, deletedCount: r.deletedCount });
  } catch (err) { next(err); }
};
