import express from "express";
import { signIn, signOut } from "../controllers/auth.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signout", signOut);

export default router;
