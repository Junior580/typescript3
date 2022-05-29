import { Router } from "express";
import { padraoController } from "../controller/controller";
export const router = Router();

router.get("/", padraoController.home);
router.get("/", padraoController.getPerson);
router.get("/usr", padraoController.getPerson);
router.get("/usr/:id", padraoController.getPersonByID);
router.post("/usr", padraoController.postPerson);
router.put("/usr/:id", padraoController.patchPerson);
router.delete("/usr/:id", padraoController.deletePerson);
