import {Router} from "express";
import{ 
    getAllQualifications,getQualificationById,addNewQualification,
    updateQualificationById,deleteQualificationById,deleteAllQualifications
} from "../controllers/education.js";

const router = Router();

router.get("/", getAllQualifications);
router.get("/:id",getQualificationById);
router.post("/",addNewQualification);
router.put("/:id",updateQualificationById);
router.delete("/:id",deleteQualificationById);
router.delete("/",deleteAllQualifications);

export default router;