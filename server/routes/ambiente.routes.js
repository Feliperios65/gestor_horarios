import { Router } from "express";
import Ambiente from "../controllers/ambiente.controller.js";

const ambiente = new Ambiente();
const router = Router();

/*METODOS CRUD*/

// obtener todos los registros
router.get("/ambientes", ambiente.getAmbientes);

// // obtener un registro
// router.get("/ambientes/:id", ambiente.getAmbiente);

// // crear registro
// router.post("/ambientes", ambiente.createAmbiente);

// // actualizar registro
// router.put("/ambientes/:id", ambiente.updateAmbiente);

// // eliminar registro
// router.delete("/ambientes/:id", ambiente.deleteAmbiente);

export default router;
