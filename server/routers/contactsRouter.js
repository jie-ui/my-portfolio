import {Router} from "express";
import{ 
   getAllContacts,getContactById,addNewContact,
    updateOne,deleteById,deleteAllContacts
} from "../controllers/contacts.js";

const router = Router();

router.get("/", getAllContacts);
router.get("/:id",getContactById);
router.post("/",addNewContact);
router.put("/:id",updateOne);
router.delete("/:id",deleteById);
router.delete("/",deleteAllContacts);

export default router;