import { Router } from "express";

import { carController } from "../controllers/car.controller";

const router = Router();

router.get("", carController.getAll);
router.post("", carController.create);

router.get("/:id", carController.getById);
router.delete("/:id", carController.deleteById);
router.put("/:id", carController.updateById);
export const carRouter = router;
