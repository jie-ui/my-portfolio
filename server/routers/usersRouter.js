import express from "express";
import {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUserById,
  deleteUserById,
  deleteAllUsers,
} from "../controllers/users.js";


const router = express.Router();



router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addNewUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);
router.delete("/", deleteAllUsers);





export default router;

