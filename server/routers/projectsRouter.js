import {Router} from "express";
import {
    getAllProjects,getProjectById ,addNewProject,updateProjectById,
     deleteProjectById,deleteAllProjects
    }from "../controllers/projects.js";


    const router = Router();

    router.get("/",getAllProjects);
    router.get("/:id",getProjectById);
    router.post("/",addNewProject);
    router.put("/:id",updateProjectById);
    router.delete("/:id",deleteProjectById);
    router.delete("/",deleteAllProjects);

    export default router;